const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const reactRule = {
  // transpile JSX
  test: /\.jsx?$/,
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

// The export can be either a function or an object.
module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    // entry: './src/index.js',
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "[name].js", // production hashing for cache busting
      path: path.resolve(__dirname, "build"), // directory to put the bundle
    },
    plugins: [
      // Default index file
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
    module: {
      // rules for webpack to process files
      rules,
    },
    devServer: {
      open: true, // open browser
      port: 3000, // port to run the server on
    },
    // devtool: "source-map", // source map for debugging (increases time)
  };
};
