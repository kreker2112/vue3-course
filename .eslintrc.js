export const root = true
export const env = {
    node: true,
    browser: true,
}
export const extendsArr = [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
]
export const rules = {
    'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
        },
    ],

    'vue/component-name-in-template-casing': [
        'error',
        {
            registeredComponentsOnly: false,
        },
    ],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
}
export const globals = {
    $nuxt: true,
}
export const parserOptions = {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
}
