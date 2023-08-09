import { defineConfig } from 'vitepress'
import { vueDocsPlugin } from '../../vite.config'
import { sideBar } from 'vitepress-plugin-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Example",
  description: "TODO description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: 'pathname:///api/index.html' },
      { text: 'Coverage', link: 'pathname:///coverage/index.html' },
      { text: 'Tests', link: 'pathname:///tests/index.html' },
    ],

    sidebar: sideBar('docs', {
      ignoreMDFiles: ['index'],
      ignoreDirectory: ['public']
    })
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    plugins: [vueDocsPlugin]
  },
})
