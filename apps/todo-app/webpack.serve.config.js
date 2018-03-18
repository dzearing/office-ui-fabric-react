const path = require('path');
const resources = require('../../scripts/tasks/webpack-resources');
const isProduction = process.argv.indexOf('--production') > -1;
const PACKAGE_NAME = 'todo-app';

module.exports = resources.createServeConfig({
  entry: {
    [PACKAGE_NAME]: './src/index.tsx'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }

});
