/* @flow strict */

const config = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@$': '<rootDir>/src',
  },
};

module.exports = config;
