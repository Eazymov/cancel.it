/* @flow strict */

const config = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = config;
