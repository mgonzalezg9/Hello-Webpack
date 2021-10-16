const path = require("path");

const reactRule = {
  // transpile JSX
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic", // import react optional
        },
      ],
    ],
  },
};

const cssRule = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"], // understands css imports and url() inside them
};

const rules = [reactRule, cssRule];

module.exports = {
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"), // directory to put the bundle
  },
  module: {
    // rules for webpack to process files
    rules,
  },
};
