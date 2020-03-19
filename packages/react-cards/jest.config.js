let { createConfig, resolveMergeStylesSerializer } = require('@uifabric/build/jest/jest-resources');
let path = require('path');

const config = createConfig({
  setupFiles: [path.resolve(path.join(__dirname, 'config', 'tests.js'))],

  moduleNameMapper: {
    '@fluentui/react/lib/(.*)$': '@fluentui/react/lib-commonjs/$1'
  },

  snapshotSerializers: [resolveMergeStylesSerializer()]
});

module.exports = config;
