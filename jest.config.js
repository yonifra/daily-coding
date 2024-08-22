/** @type {import('jest').Config} */
const config = {
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
}

module.exports = config
