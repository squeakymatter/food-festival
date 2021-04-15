const path = require('path');
const webpack = require('webpack');

//entry: root of the bundle/beginning of dependency graph (relative path to the client's code)... where the webpack looks to start building the module
//output: tell webpack where the files are going to go, and the names of the files. best practice: bundled code is in folder named `dist`
//mode: mode that we want webpack to run. by default, it wants to run in prod mode. in production mode, webpack minifies code automatically. change to development mode for now.
module.exports = {
  entry: './assets/js/script.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'main.bundle.js' },
  //tell webpack to use `providerPlugin to define the `$` and `jQuery` variables to use the installed npm package.
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  mode: 'development',
};
