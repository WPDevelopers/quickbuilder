const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(__dirname, "src/index.tsx"),
	},
	module: {
		...defaultConfig.module,
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
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
	},
};
