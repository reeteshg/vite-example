import { VueQueryPlugin } from '@tanstack/vue-query'
import { config } from '@vue/test-utils'
import { globSync } from 'glob'
import { type RestHandler } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { createVuetify } from 'vuetify'

// Find all mock handler modules, import them, and combine them
const handlerFiles = globSync('./**/mocks/handlers.ts')
let restHandlers: RestHandler[] = []
for (const file of handlerFiles) {
  const handlerModule = await import(/* @vite-ignore */ file) as { restHandlers?: RestHandler[] }
  const handlers = handlerModule.restHandlers ?? []
  restHandlers = restHandlers.concat(handlers)
}

// Setup msw server
const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => { server.listen({ onUnhandledRequest: 'error' }) })

//  Close server after all tests
afterAll(() => { server.close() })

// Reset handlers after each test (important for test isolation)
afterEach(() => { server.resetHandlers() })

// vue plugins
config.global.plugins = [createVuetify(), VueQueryPlugin]
