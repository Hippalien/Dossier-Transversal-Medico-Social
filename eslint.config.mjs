// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // Options Antfu
    vue: true,
    typescript: true,
    formatters: true, 
    stylistic: {
      indent: 2,
      quotes: 'single',
    }
  })
)