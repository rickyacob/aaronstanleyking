const path = require("path");
const paths = require("../config/paths");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss")(
  path.resolve(paths.config, "tailwind.config.js")
);

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  output: {
    publicPath: "/assets/",
    filename: "js/[name].min.js",
  },
  module: {
    rules: [{
      test: [/.css$|.scss$/],
      exclude: /(node_modules)/,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1
          }
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [tailwind, autoprefixer]
              ]
            }
          },
        },
        {
          loader: "sass-loader",
        },
      ],
    }, ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
      }),
    ],
  }
});