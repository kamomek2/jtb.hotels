module.exports = {
  testURL: 'http://localhost/',
  setupFiles: [
    '<rootDir>/test-shim.js',
    '<rootDir>/test-setup.js'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/test-preprocessor.js',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    '**/__tests__/*.spec.(ts|tsx|js|jsx)'
  ],
  globals: {
    'ts-jest': {
      useBabelrc: true,
      tsConfig: 'tsconfig.json'
    },
  },
  collectCoverage: false,
  moduleNameMapper: {
    '^.+\\.s?css': 'identity-obj-proxy',
    // '^.+\\.(jpe?g|png|gif|svg)': '<rootDir>/__mocks__/fileMock.js',
    // '^.+\\.(eot|ttf|otf|woff|woff2)': 'identity-obj-proxy',
    '^\\$components\\/(.*)$': '<rootDir>/src/components/$1',
    '^\\$containers\\/(.*)$': '<rootDir>/src/containers/$1',
    '^\\$constants\\/(.*)$': '<rootDir>/src/constants/$1',
    '^\\$sprites\\/(.*)$': '<rootDir>/src/sprites/$1',
    '^\\$config$': '<rootDir>/src/config.js',
    '^\\$config\\/(.*)$': '<rootDir>/src/config/$1',
    '^\\$styles\\/(.*)$': '<rootDir>/src/styles/$1',
    '^\\$redux\\/(.*)$': '<rootDir>/src/redux/$1',
    '^\\$utils\\/(.*)$': '<rootDir>/src/utils/$1',
    '^\\$types$': '<rootDir>/src/types',
  },
  modulePaths: ['src'],
  coveragePathIgnorePatterns: ['.*\\.d\\.ts', '<rootDir>/node_modules/']
  // setupFiles: ['<rootDir>/__tests__/setup.js', 'jest-localstorage-mock'],
  // testRegex: '__tests__\\/.*\\.spec\\.tsx?$',
  // transform: {
  //   '^.+\\.tsx?$': '<rootDir>/node_modules/babel-jest',
  // },
};
