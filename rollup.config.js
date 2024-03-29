import builtins from "rollup-plugin-node-builtins";
import { uglify } from "rollup-plugin-uglify";
import ignoreImport from "rollup-plugin-ignore-import";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

const postcssPlugins = require("@wordpress/postcss-plugins-preset");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const isProduction = process.env.NODE_ENV === "production";
const distFolder = isProduction ? "dist/src/" : "dist/dev/";
const styleFolder = "dist/";

const globalKeys = {
	react: "React",
	"react-dom": "ReactDOM",
	lodash: "lodash",
	"lodash-es": "lodashEs",
	moment: "momentLib",
	"react-draft-wysiwyg": "reactDraftWysiwyg",
	"draft-js": "draftJs",
	"draft-js?commonjs-proxy": "draftJs",
	"@wordpress/components": "wpComponents",
	"@wordpress/api-fetch": "wpApiFetch",
	"@wordpress/date": "wpDate",
	"@wordpress/data": "wpData",
	"@wordpress/hooks": "wpHooks",
	"@wordpress/i18n": "wpI18n",
	"@wordpress/media-utils": "wpMedia",
	"classnames": "classNames",
	"draftjs-to-html": "draftjsToHtml",
	"html-to-draftjs": "htmlToDraftjs",
	"intersect": "intersect",
	"lodash-es": "lodashEs",
	"react-bootstrap-sweetalert": "sweetalert",
	"react-select": "reactSelect",
	"sweetalert2": "sweetalert2",
	"copy-to-clipboard": "copy",
};

const isMin = isProduction ? ".min" : "";

export default {
	input: "./index.tsx",
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
		peerDepsExternal(),
		builtins(),
		nodeResolve({
			mainFields: ["browser", "module", "main"],
			extensions,
		}),
		commonjs({
			exclude: ["node_modules/draft-js/**", "dist/**"],
		}),
		scss({
			output: `${styleFolder}index.css`,
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
			plugins: [
				"@babel/plugin-transform-runtime",
				"@babel/plugin-proposal-class-properties",
			],
		}),
		isProduction ? uglify() : null,
	],
};
