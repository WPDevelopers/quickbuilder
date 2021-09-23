const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
	...defaultConfig,
	mode: "development",
	entry: {
		index: path.resolve(__dirname, "index.tsx"),
	},
	module: {
		...defaultConfig.module,
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: "url-loader",
			},
			...defaultConfig.module.rules,
		],
	},
	resolve: {
		...defaultConfig.resolve,
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	output: {
		...defaultConfig.output,
		filename: "index.js",
		path: path.resolve(__dirname, "build"),
		// library: ["wp", "quickbuilder"],
		// libraryTarget: "window",
	},
};
