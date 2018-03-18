let path = require('path');
let resources = require('../../scripts/tasks/webpack-resources');

module.exports = resources.createServeConfig({
  entry: './src/index.tsx',

  output: {
    filename: 'test-bundle-button.js'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }

});
