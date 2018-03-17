module.exports = function (options) {
  const path = require('path');
  const execSync = require('../exec-sync');
  const typescriptPath = 'node ' + path.resolve(__dirname, '../node_modules/typescript/lib/tsc');
  const libPath = path.resolve(process.cwd(), 'lib');
  const srcPath = path.resolve(process.cwd(), 'src');
  const extraParams = '--pretty' + (options.isProduction ? ` --inlineSources --sourceRoot ${path.relative(libPath, srcPath)}` : '');

  // Needed for webpacking, since webpack and typescript both look at module entries.
  execSync(typescriptPath + ' -outDir lib-es2015 -t es5 -m es2015 ' + extraParams);

  // Needed for jest and node 8, since node8 doesn't support es6 and jest only looks at main. :( :( :(
  // As soon as node and jest can support es6, we can remove this.
  execSync(typescriptPath + ' -outDir lib -t es5 -m commonjs ' + extraParams);

  if (options.isProduction) {
    execSync(typescriptPath + ' -outDir lib-amd -t es5 -m amd ' + extraParams);
  }
};