const config = {
  moduleNameMapper: {
    '@fluentui/react/lib/(.*)$': '<rootDir>/src/$1'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js)$',
  transform: {},
  testEnvironment: 'node'
};

module.exports = config;
