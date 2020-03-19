const path = require('path');
const resources = require('../../scripts/webpack/webpack-resources');

module.exports = resources.createServeConfig({
  entry: './src/index.bundle.ts',

  output: {
    filename: 'fluent-ui-react.js',
    libraryTarget: 'var',
    library: 'FluentUI'
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  resolve: {
    alias: {
      '@fluentui/react$': path.join(__dirname, 'src'),
      '@fluentui/react/src': path.join(__dirname, 'src'),
      '@fluentui/react/lib': path.join(__dirname, 'src'),
      'Props.ts.js': 'Props',
      'Example.tsx.js': 'Example'
    }
  }
});
