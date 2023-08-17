<!-- eslint-disable @typescript-eslint/strict-boolean-expressions -->
<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { type Ref, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const peopleFetcher = async (page: Ref<number>) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page.value}&results=20&seed=abc`
  )
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json()

  // fake delay
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return data?.results
}

const page = ref(1)
const { isLoading, data, isFetching, isPreviousData } =
  useQuery({
    queryKey: ['people', page],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    queryFn: async () => await peopleFetcher(page),
    keepPreviousData: true
  })

/**
 * update page ref to force a new query and
 * get the next page
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const nextPage = () => {
  if (!isPreviousData.value) {
    page.value = page.value + 1
  }
}

/**
 * update page ref to force a new query and
 * get the previous page
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const prevPage = () => {
  page.value = Math.max(page.value - 1, 1)
}
</script>

<template>
  <template v-if="isLoading && !data">
    <h1>Loading</h1>
  </template>
  <template v-else>
    <p>Current Page: {{ page }}</p>
    <v-btn
      :disabled="isFetching || page === 1"
      @click="prevPage"
    >
      {{ isFetching ? "Loading..." : "Prev Page" }}
    </v-btn>

    <v-btn
      :disabled="isFetching"
      @click="nextPage"
    >
      {{ isFetching ? "Loading..." : "Next Page" }}
    </v-btn>
    <v-list>
      <v-list-item
        v-for="item in data"
        :key="item.login.uuid"
      >
        {{ item.email }}
      </v-list-item>
    </v-list>
  </template>
</template>
