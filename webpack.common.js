const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './src/[name].css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      { test: /\.pug$/, use: ['html-loader', 'pug-html-loader']},
      { test: /\.(scss|sass)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.(png|svg|gif|jpe?g)$/, use: ['file-loader']},
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      { test: /\.xml$/, use: ['xml-loader']}
    ]
  }
}
