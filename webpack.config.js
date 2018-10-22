const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: { extensions: ['*', '.js','.jsx'] },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
    {
      test: /|.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    publicPath: '/dist/',
    port: 3000,
    historyApiFallback:true,
  }
}