module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/?(*.)test.tsx'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false
    }
  }
}
