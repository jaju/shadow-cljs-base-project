const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: "development",
    entry: {
      main: "./src/js/bundle.js"
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "js/bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello, From HTML Webpack Plugin!",
        filename: "index.html",
        template: "src/html/index.html",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      })
    ]
  }
];
