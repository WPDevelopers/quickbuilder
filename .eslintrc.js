module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	env: {
		browser: true,
	},
	rules: {
		// A hoisted transitive Prettier 3 breaks the bundled eslint-plugin-prettier 3.x.
		'prettier/prettier': 'off',
		// Existing codebase predates linting; keep noise manageable.
		'@wordpress/no-unsafe-wp-apis': 'warn',
		'jsdoc/require-param-type': 'off',
	},
};
