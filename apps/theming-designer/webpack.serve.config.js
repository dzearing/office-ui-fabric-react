const path = require('path');
const resources = require('../../scripts/webpack/webpack-resources');
const isProduction = process.argv.indexOf('--production') > -1;
const PACKAGE_NAME = 'theming-designer';

module.exports = resources.createServeConfig({
  entry: './src/index.tsx',
  output: {
    filename: 'theming-designer.js'
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  resolve: {
    alias: {
      '@fluentui/react$': path.resolve(__dirname, '../../packages/react/current/src'),
      '@fluentui/react/lib': path.resolve(__dirname, '../../packages/react/current/src'),
      '@fluentui/react/src': path.resolve(__dirname, '../../packages/react/current/src')
    }
  }
});
