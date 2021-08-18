import { uglify } from "rollup-plugin-uglify";
import ignoreImport from "rollup-plugin-ignore-import";
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

const postcssPlugins = require("@wordpress/postcss-plugins-preset");

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const distFolder = "dist/";

const isProduction = process.env.NODE_ENV === "production";

export default {
	input: "index.tsx",
	output: [
		{
			file: `${distFolder}formbuilder.cjs.js`,
			format: "cjs",
		},
		{
			file: `${distFolder}formbuilder.esm.js`,
			format: "esm",
		},
		{
			name: "FormBuilder",
			file: `${distFolder}formbuilder.umd.js`,
			format: "umd",
			globals: {
				react: "React",
				"react-dom": "ReactDOM",
				lodash: "lodash",
				"lodash-es": "lodashEs",
				moment: "momentLib",
				"@wordpress/components": "wpComponents",
			},
		},
	],
	external: [
		/@babel\/runtime/,
		/react/,
		/react-dom/,
		/moment/,
		/@wordpress\/components/,
		/lodash/,
		/lodash-es/,
	],
	plugins: [
		resolve({
			mainFields: ["module", "main", "jsnext:main", "browser"],
			extensions,
		}),
		scss({
			output: `${distFolder}formbuilder.css`,
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
		commonjs(),
		json({
			include: ["node_modules/**/*.json"],
		}),
		babel({
			exclude: "./node_modules/**",
			extensions,
			babelHelpers: "runtime",
			plugins: [
				"@babel/plugin-transform-runtime",
				"@babel/plugin-proposal-class-properties",
			],
		}),
		uglify(),
	],
};
