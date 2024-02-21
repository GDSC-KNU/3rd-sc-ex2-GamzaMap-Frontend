module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react/jsx-no-target-blank': 'off', // 타겟 블랭크 규칙 비활성화
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/prop-types': 'off', // 프로퍼티 타입 검사 규칙 비활성화
        'react/display-name': 'off', // 디스플레이 네임 검사 규칙 비활성화
        'prettier/prettier': 0, // prettier 규칙 위반시 경고
    },
};
