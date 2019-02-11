import { parserOptions, plugins, rules } from './index'

const name = '@nod/eslint-config-legacy'

describe(name, () => {
  test('contains parserOptions', () => {
    expect(Object.keys(parserOptions).length > 0).toBeTruthy()
  })
  test('contains plugins', () => {
    expect(Object.keys(plugins).length > 0).toBeTruthy()
  })
  test('contains rules', () => {
    expect(Object.keys(rules).length > 0).toBeTruthy()
  })
})
