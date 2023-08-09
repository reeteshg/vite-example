/* eslint-disable-next-line @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />
import('../lib/build')

// Vue SFC component modules
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

// vite-plugin-eslint doesn't currently expose "types" under its "exports" map
declare module 'vite-plugin-eslint'
