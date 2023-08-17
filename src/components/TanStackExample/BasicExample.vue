// eslint-disable-next-line vue/block-lang
<script>
import useDogQuery from '../../queries/useDogQuery'
export default {
  setup () {
    const { data } = useDogQuery()
    return { data }
  }
}
</script>

<template>
  <h1>The picture below is reloaded anytime: </h1>
  <ul>
    <li>
      The user navigates away from the page and refocuses on the tab
    </li>
  </ul>
  <img
    v-if="data"
    :src="data.message"
  />
</template>
