# HelloWorld

## Props

| Prop name | Description                           | Type   | Values | Default |
| --------- | ------------------------------------- | ------ | ------ | ------- |
| msg       | The message to display as an example. | string | -      | 'count' |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

## Expose

### method

> This is a method <br/>`@param` The Amount to increment by.<br/>`@emits` change

---

<script setup>
import HelloWorld from '../../src/components/HelloWorld.vue'
</script>

This shows an example Markdown page rendering a Vue component inline.

- Live editing with Hot Module Replacement (HMR) works! Edit `components/HelloWorld.vue` to test HMR

## Usage

### Default message

```vue
<HelloWorld />
```

<HelloWorld/>

### With a message for testing

```vue
<HelloWorld msg="clicks" />
```

<HelloWorld msg="clicks"/>
