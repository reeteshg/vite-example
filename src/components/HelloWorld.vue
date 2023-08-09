<script setup lang="ts">
import { useMouse } from '@vueuse/core'
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
const { x, y, sourceType } = useMouse()

/**
 * Testing
 *
 * @param amount This is a test
 * @returns the best item
 */
function increaseNumber (amount = 1): string {
  count.value += amount
  emit('change', count.value)
  return 'hey'
}

</script>

<template>
  <p class="success-container">
    Congrats.  You have successfully started the playground/sandbox environment
  </p>
  <v-btn
    @click="increaseNumber(1)"
  >
    {{ msg }} is {{ count }}
    <v-icon
      icon="mdi-plus"
      class="pl-2"
    />
  </v-btn>
  <br><br>
  <p>VueUse Example</p>
  <ul>
    <li>x: {{ x }}</li>
    <li>y: {{ y }}</li>
    <li>sourceType: {{ sourceType }}</li>
  </ul>
</template>

<style scoped lang="sass">
.success-container
  color: blue
  font-size: 20px
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
