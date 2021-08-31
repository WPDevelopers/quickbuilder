import builtins from "rollup-plugin-node-builtins";
import { uglify } from "rollup-plugin-uglify";
import ignoreImport from "rollup-plugin-ignore-import";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

function NxPlugin() {
	return {
		name: "nx-plugin", // this name will show up in warnings and errors
		resolveId(source) {
			// if (
			// 	source == "draft-js?commonjs-proxy" ||
			// 	source == "draft-js?commonjs-proxy"
			// ) {
			// 	return "draft-js";
			// }
			if (source.includes("draft-js")) {
				console.log("source", source);
			}
			// if (source === "draft-js") {
			// 	return source; // this signals that rollup should not ask other plugins or check the file system to find this id
			// }
			return null; // other ids should be handled as usually
		},
		load(id) {
			const isExternal = (id) =>
				!id.startsWith("\0") &&
				!id.startsWith(".") &&
				!id.startsWith("/");

			// if (id.includes("draft")) {
			// 	console.log("id", id);
			// }

			// if (id === "draft-js") {
			// 	return 'export default "This is virtual!"'; // the source code for "virtual-module"
			// }
			return null; // other ids should be handled as usually
		},
	};
}

const postcssPlugins = require("@wordpress/postcss-plugins-preset");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const isProduction = process.env.NODE_ENV === "production";
const distFolder = isProduction ? "quickbuilder/" : "dist/";
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
