let { createConfig } = require('@uifabric/build/jest/jest-resources');
let path = require('path');

const config = createConfig({
  setupFiles: [path.resolve(path.join(__dirname, 'config', 'tests.js'))],

  moduleNameMapper: {
    // These mappings allow Jest to run snapshot tests against Example files.
    '@fluentui/react/lib/(.*)$': '<rootDir>/../react/current/src/$1'
  }
});

module.exports = config;
