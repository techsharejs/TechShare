const path = require("path");

module.exports = {
  entry: "./client/index.js",
  mode: "development",
  devtool: "incline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    publicPath: "/dist/",
    port: 3001,
    historyApiFallback: true
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  }
};
