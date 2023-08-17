import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '../components/HelloWorld.vue'
import BasicExample from '../components/TanStackExample/BasicExample.vue'
import PaginationExample from '../components/TanStackExample/PaginationExample.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorldVue
  },
  {
    path: '/tanstack-basic',
    name: 'Basic TanStack Example',
    component: BasicExample
  },
  {
    path: '/tanstack-pagination',
    name: 'TanStack Pagination Example',
    component: PaginationExample
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
