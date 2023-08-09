<script setup lang="ts">
import { ref } from 'vue'
import { VBtn } from 'vuetify/components/VBtn'

export interface Props {
  /**
   * The message to display as an example.
   */
  msg?: string
}
withDefaults(defineProps<Props>(), {
  msg: 'count'
})

const emit = defineEmits<// (e: 'update', value: string): void
/**
 * Testing
 */
(e: 'change', id: number) => void
>()

defineSlots<{
  /**
   * Slot
   *
   * @param props It's a slot
   */
  default: (props: { content: string }) => unknown
}>()

const count = ref(0)

/**
 * Testing
 *
 * @param amount This is a test
 * @returns the best item
 */
function method (amount = 1): string {
  count.value += amount
  emit('change', count.value)
  return 'hey'
}

defineExpose({
  /**
   * This is a method
   *
   * @param amount The Amount to increment by.
   * @emits change
   */
  method
})

</script>

<template>
  <div class="card">
    <v-btn
      @click="method(1)"
    >
      {{ msg }} is {{ count }}
    </v-btn>
    <slot content="foo" />
  </div>
</template>

<style scoped lang="sass">
.read-the-docs
  color: #888
</style>

<docs lang="md">

<script setup>
import HelloWorld from '../../src/components/HelloWorld.vue'
</script>

This shows an example Markdown page rendering a Vue component inline.
- Live editing with Hot Module Replacement (HMR) works! Edit `components/HelloWorld.vue` to test HMR

## Usage

### Default message
```vue
<HelloWorld/>
```
<HelloWorld/>

### With a message for testing
```vue
<HelloWorld msg="clicks"/>
```
<HelloWorld msg="clicks"/>

</docs>
