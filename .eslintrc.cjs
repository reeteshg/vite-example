module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint',
    'vue',
    'jsdoc',
    'vitest'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-recommended',
    'plugin:jsdoc/recommended-typescript',
    'plugin:vitest/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'standard-with-typescript'
  ],
  ignorePatterns: [
    'dist/**', // ignore build output
    'mockServiceWorker.js', // this is installed into docs/ by the msw package
     '*js' // @typescript-eslint does not work well with js
    ],
  settings: {
    jsdoc: {
      // Vue uses the term 'emits' for events, keep consistent
      tagNamePreference: {
        fires: 'emits'
      }
    }
  },
  rules: {
    /*
    * vue rules
    */
    'vue/component-tags-order': ['warn', {
      order: ['script', 'template', 'style']
    }],
    'vue/component-api-style': ['warn',
      ['script-setup']
    ],
    'vue/block-lang': ['warn',
      {
        script: { lang: 'ts' },
        style: { lang: 'sass' }
      }
    ],
    'vue/component-name-in-template-casing': ['warn', 'kebab-case', {
      registeredComponentsOnly: true
    }],
    'vue/custom-event-name-casing': ['warn', 'kebab-case'],
    'vue/define-emits-declaration': ['warn', 'type-based'], // enforces defineEmits style
    'vue/define-props-declaration': ['warn', 'type-based'],
    'vue/define-macros-order': ['warn', {
      order: ['defineProps', 'defineEmits']
    }],
    'vue/max-lines-per-block': ['warn', {
      script: 160,
      template: 85,
      skipBlankLines: true
    }],
    'vue/no-boolean-default': ['warn'],
    'vue/no-empty-component-block': ['warn'],
    'vue/no-multiple-objects-in-class': ['warn'],
    'vue/no-ref-object-destructure': ['warn'],
    'vue/no-required-prop-with-default': ['warn'],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/prefer-true-attribute-shorthand': ['warn'],
    'vue/require-prop-comment': ['warn', {
      type: 'JSDoc'
    }],
    'vue/v-for-delimiter-style': ['warn', 'in'],
    'vue/no-extra-parens': ['warn'],
    'vue/space-in-parens': ['warn'],
    /*
     * @typescript rules
     */
    '@typescript-eslint/member-ordering': 'warn', // Require a consistent member declaration order.
    /**
     * eslint rules
     */
    'max-lines-per-function': ['warn', {
      max: 200,
      skipComments: true
    }],
    'import/order': ['warn', {
      'newlines-between': 'never',
      alphabetize: { order: 'asc' } // order imports in abc order
    }],
    curly: ['warn', 'all'], // no inline if statements
    'max-len': ['warn', { code: 120, comments: 80 }],
    'jsdoc/require-jsdoc': ['warn', { publicOnly: false }],
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }]
  }
}
