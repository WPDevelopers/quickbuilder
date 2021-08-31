import builtins from "rollup-plugin-node-builtins";
import { uglify } from "rollup-plugin-uglify";
import ignoreImport from "rollup-plugin-ignore-import";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

const postcssPlugins = require("@wordpress/postcss-plugins-preset");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const isProduction = process.env.NODE_ENV === "production";
const distFolder = isProduction ? "dist/src/" : "dist/dev/";

const globalKeys = {
	react: "React",
	"react-dom": "ReactDOM",
	lodash: "lodash",
	"lodash-es": "lodashEs",
	moment: "momentLib",
	"@wordpress/components": "wpComponents",
	"react-draft-wysiwyg": "reactDraftWysiwyg",
	"draft-js": "draftJs",
	"draft-js?commonjs-proxy": "draftJs",
};

const isMin = isProduction ? ".min" : "";

export default {
	input: "index.tsx",
	output: [
		{
			file: `${distFolder}quickbuilder.cjs${isMin}.js`,
			format: "cjs",
		},
		{
			file: `${distFolder}quickbuilder.esm${isMin}.js`,
			format: "esm",
		},
		{
			name: "quickbuilder",
			file: `${distFolder}quickbuilder.umd${isMin}.js`,
			format: "umd",
			globals: globalKeys,
		},
	],
	external: Object.keys(globalKeys),
	plugins: [
		builtins(),
		nodeResolve({
			mainFields: ["browser", "module", "main"],
			extensions,
		}),
		commonjs({
			exclude: ["node_modules/draft-js/**"],
		}),
		scss({
			output: `${distFolder}quickbuilder.css`,
			sourceMap: !isProduction,
			include: ["**/*.scss", "*.css", "node_modules/**/*.css"],
			failOnError: true,
			sass: require("node-sass"),
			plugins: postcssPlugins,
			// processor: () => postcss([autoprefixer({ overrideBrowserslist: "Edge 18" })]),
		}),
		ignoreImport({
			extensions: [".scss", ".css"],
		}),
		json({
			include: ["node_modules/**/*.json"],
		}),
		babel({
			exclude: "node_modules/**",
			extensions,
			babelHelpers: "runtime",
		}),
		isProduction ? uglify() : null,
	],
};
