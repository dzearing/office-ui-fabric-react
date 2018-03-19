const path = require('path');
const resources = require('../../scripts/tasks/webpack-resources');

module.exports = resources.createConfig(
  'ssr-tests',
  false,
  {
    entry: './test/test.js',

    output: {
      filename: 'ssr-tests.js',
    },

    target: 'node',

    node: {
      fs: 'empty'
    },

    resolve: {
      alias: {
        'office-ui-fabric-react/src': path.join(__dirname, '../../packages/office-ui-fabric-react/src'),
        'Props.ts.js': 'Props'
      },
      extensions: ['.js', '.tsx']
    },

    plugins: [
      new resources.webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
    ]
  });
