const path = require('path');
const resources = require('../../scripts/tasks/webpack-resources');

const PACKAGE_NAME = 'test-bundle-button';

module.exports = resources.createConfig(
  PACKAGE_NAME,
  true,
  {
    entry: {
      [PACKAGE_NAME]: './lib-es2015/index.js'
    },

    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }

  },
  true
);
