import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './plugins/pinia'
import { router } from './plugins/router'
import vuetify from './plugins/vuetify'

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(VueQueryPlugin)
  .mount('#app')
