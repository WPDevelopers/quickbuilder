"use strict";

if (process.env.NODE_ENV === "production") {
	module.exports = require("./src/quickbuilder.cjs.min.js");
} else {
	module.exports = require("./dev/quickbuilder.cjs.js");
}
