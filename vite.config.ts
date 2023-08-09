/* eslint-disable-next-line @typescript-eslint/triple-slash-reference --
  vite config requires this style
*/
/// <reference types="vitest" />

import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'

export const vueDocsPlugin = {
  name: 'ignore-docs-tags',
  transform (_code: string, id: string): string | undefined {
    if (!id.includes('vue&type=docs')) {
      return
    }
    return 'export default ""'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2022',
    sourcemap: true
  },
  plugins: [
    vueDocsPlugin,
    vue(),
    dts(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    eslint({ formatter: 'friendly' })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    deps: {
      inline: ['vuetify']
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: './docs/public/coverage'
    },
    setupFiles: 'vitestSetup.ts'
  }
})
