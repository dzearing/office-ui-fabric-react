const path = require('path');
const resources = require('../../scripts/webpack/webpack-resources');

module.exports = resources.createServeConfig({
  entry: './src/demo/index.tsx',

  output: {
    filename: 'demo-app.js'
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  resolve: {
    alias: {
      '@uifabric/example-app-base$': path.resolve(__dirname, '../../packages/example-app-base/src'),
      '@uifabric/experiments/src': path.resolve(__dirname, '../../packages/experiments/src'),
      '@uifabric/experiments/lib': path.resolve(__dirname, '../../packages/experiments/src'),
      '@uifabric/experiments': path.resolve(__dirname, '../../packages/experiments/src'),
      '@uifabric/foundation$': path.resolve(__dirname, '../../packages/foundation/src'),
      '@uifabric/react-cards/src': path.resolve(__dirname, 'src'),
      '@uifabric/react-cards/lib': path.resolve(__dirname, 'src'),
      '@uifabric/react-cards': path.resolve(__dirname, 'src'),
      '@fluentui/react$': path.resolve(__dirname, '../../packages/react/current/src'),
      '@fluentui/react/lib': path.resolve(__dirname, '../../packages/react/current/src'),
      '@fluentui/react/src': path.resolve(__dirname, '../../packages/react/current/src'),
      'Props.ts.js': 'Props',
      'Example.tsx.js': 'Example'
    }
  }
});
