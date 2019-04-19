var path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/bundle.js"
  },
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js"
  }
};
