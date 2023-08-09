import DefaultTheme from 'vitepress/theme'
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import './style.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

// Vuetify and Tan-Stack Vue Query
const vuetify = createVuetify({components, directives})
export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    app.use(vuetify)
    app.use(VueQueryPlugin)
  }
}

// Setup the mock service worker msw
// import { setupWorker } from 'msw'
// const handlers = [
//
// ]
// const worker = setupWorker(...handlers)
// worker.start()
