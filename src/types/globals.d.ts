/**
 * Minimal ambient globals for the browser bundle.
 *
 * The build replaces `process.env.NODE_ENV` at compile time (Rollup), so the
 * library does not depend on `@types/node` — this declares just the slice of
 * `process.env` the source reads, keeping the type surface browser-appropriate.
 */
declare const process: {
	env: {
		NODE_ENV?: 'development' | 'production' | 'test';
		[key: string]: string | undefined;
	};
};
