var webpack = require('webpack')

module.exports = {
  entry: ["./main/index.js"],

  output: {
    path: './build',
    filename: "bundle.js",
    publicPath: 'build'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json']
  },

  devServer: {
    hot: true,
    inline: true
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}