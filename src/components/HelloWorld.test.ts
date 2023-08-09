import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

test('click count', async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'foo'
    }
  })
  const button = wrapper.get('button')
  expect(button.text()).toBe('foo is 0')
  await button.trigger('click')
  expect(button.text()).toBe('foo is 1')
})
