module.exports = {
  preset: 'ts-jest',
  rootDir: '../../',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**'
  ],
  setupFiles: [
    'jest-canvas-mock'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/jest-setup.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ],
  coverageDirectory: '<rootDir>/config/jest/coverage',
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
      : '<rootDir>/config/jest/__mocks__/file-mock.js',
    '^src(.*)$': '<rootDir>/src$1',
    'app/i18n': '<rootDir>/config/jest/__mocks__/i18n',
    '@cosmos(.*)$': '@hotmart/cosmos/dist/$1'
  }
};
