const path = require('path');
const resources = require('@uifabric/build/webpack/webpack-resources');

const BUNDLE_NAME = 'office-ui-fabric-react';
const IS_PRODUCTION = process.argv.indexOf('--production') > -1;

module.exports = resources.createConfig(BUNDLE_NAME, IS_PRODUCTION, {
  entry: {
    [BUNDLE_NAME]: './lib/index.js'
  },

  output: {
    libraryTarget: 'var',
    library: 'FabricOfficeUiFabricReact'
  },

  externals: [{ react: 'React' }, { 'react-dom': 'ReactDOM' }],

  resolve: {
    alias: {
      '@uifabric/office-ui-fabric-react/src': path.join(__dirname, 'src'),
      '@uifabric/office-ui-fabric-react/lib': path.join(__dirname, 'lib'),
      '@uifabric/office-ui-fabric-react': path.join(__dirname, 'lib')
    }
  }
});
