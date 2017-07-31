// var webpack = require('webpack'),
//     path = require('path'),
//     yargs = require('yargs');
 
// var libraryName = 'chatgut',
//     plugins = [],
//     outputFile;
 
// if (yargs.argv.p) {
//   plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
//   outputFile = libraryName + '.min.js';
// } else {
//   outputFile = libraryName + '.js';
// }
 
// var config = {
//   entry: [
//     // __dirname + '/src/TestClass.ts',
//     __dirname + '/src/index.ts'
//   ],
//   devtool: 'source-map',
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: outputFile,
//     library: libraryName,
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   },
//   module: {
//     preLoaders: [
//       { test: /\.tsx?$/, loader: 'tslint', exclude: /node_modules/ }
//     ],
//     loaders: [
//       { 
//         test: /\.tsx?$/, 
//         loader: 'ts', 
//         exclude: /node_modules/ 
//       }
//     ]
//   },
//   resolve: {
//     root: path.resolve('./src'),
//     extensions: [ '', '.js', '.ts', '.jsx', '.tsx' ]
//   },
//   plugins: plugins,
 
//   // Individual Plugin Options
//   tslint: {
//     emitErrors: true,
//     failOnHint: true
//   }
// };
 
// module.exports = config;

var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

library_name = "chatgut";
output = "dist";

module.exports = {
  'entry': {
    // your entry file file (entry.ts or entry.js)
    'd3metric': ['./src/index'],
    // 'd3metric.demo': ['./demo/demo.entry'],
  },
  'output': {
    'path': __dirname,
    'filename': output +'/'+library_name+'.min.js',
    library: library_name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  'module': {
    'loaders': [
      // ts-loader: convert typescript (es6) to javascript (es6),
      // babel-loader: converts javascript (es6) to javascript (es5)
      {
        'test': /\.tsx?$/,
        'loaders': ['babel-loader','ts-loader'],
        'exclude': [/node_modules/,nodeModulesPath]
      },
      // babel-loader for pure javascript (es6) => javascript (es5)
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel'],
        'exclude': [/node_modules/,nodeModulesPath]
      }
    ]
  },
  'externals': {
    // don't bundle the 'react' npm package with our bundle.js
    // but get it from a global 'React' variable
    'react': 'React'
  },
  'plugins': [],
  'resolve': {
    'root': [path.resolve('./src')],
    'extensions': ['', '.js', '.jsx', '.ts', '.tsx'],

    // this is only required when we "import 'jquery'"
    // 'alias': { 'jquery': path.join(__dirname, "vendor", "jquery-2.2.0.min.js") }
  }
};
