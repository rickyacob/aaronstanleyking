const path = require("path");
const paths = require("../config/paths");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminWebP = require("imagemin-webp");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: [
		path.resolve(paths.srcAssets + '/js/main.js'),
		path.resolve(paths.srcAssets + '/scss/main.scss'),
	],
	output: {
		path: path.resolve(paths.public),
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
		}, ],
	},

	plugins: [
		new CopyWebpackPlugin({
			patterns: [{
				from: "./src/assets/images/**/*.{png,jpg,jpeg}",
				to: "./assets/images/[name].webp",
			}]
		}),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminWebP({
					quality: 75,
				}),
			],
		}),
	],
};