import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  react: true,
  ignores: ['src/routeTree.gen.ts'],
})
