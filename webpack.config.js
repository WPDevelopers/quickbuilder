const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );

const plugins = defaultConfig.plugins.filter(
    (plugin) =>
        plugin.constructor.name != "MiniCssExtractPlugin"
);

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
    plugins: [
        new CleanWebpackPlugin({
            // dry: true,
            cleanOnceBeforeBuildPatterns: [
                "admin/css/admin.css",
                "admin/css/admin.css.map",
                "admin/js/admin.js",
                "admin/js/admin.js.map",
                "admin/js/admin.asset.php",
            ],
        }),
        new MiniCSSExtractPlugin({
            filename: `admin/css/admin.css`,
        }),
        ...plugins,
    ],
};
