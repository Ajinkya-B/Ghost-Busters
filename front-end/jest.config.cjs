module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/components/**/*.{js,jsx}', 'src/services/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setUpFilesAfterEnv: ['src/jest.setup.js'],
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer'
    }
}
