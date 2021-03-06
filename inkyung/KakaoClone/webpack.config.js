const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  node: {
    fs: 'empty',
    net: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    hot: true,
    overlay: true,
    writeToDisk: true,
    historyApiFallback: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {compact: false}
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jfif$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader'
            }]
      },
      {
        test: /\.(mp4)$/,
        use: [{
            loader: 'file-loader'
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv()
  ]
}