// var webpack = require('webpack')
//
// module.exports = {
//   entry: ["./src/index.js"],
//
//   output: {
//     path: 'build',
//     filename: "bundle.js",
//     publicPath: '/'
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         loader: "style!css"
//       },
//       {
//         test: /\.less/,
//         loader: 'style-loader!css-loader'
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         query: {
//           presets: ['react', 'es2015', 'stage-1']
//         },
//         loader: "babel-loader"
//       }
//     ]
//   },
//
//   resolve: {
//     extensions: ['', '.js', '.json']
//   },
//
//   plugins: [
//     new webpack.NoErrorsPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// }


module.exports = {
  entry: './src/index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
}

