const { legacy: legacyConfig } = require('@nod/eslint-plugin-nod')

const { globals, rules, ...config } = legacyConfig
const safeObject = object => object || {}

module.exports = {
  ...config,
  ...{
    rules: {
      ...safeObject(rules),
      ...{
        radix: 0
      }
    },
    globals: {
      ...safeObject(globals)
    }
  }
}
