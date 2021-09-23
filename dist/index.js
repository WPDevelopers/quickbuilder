"use strict";

module.exports = require("./style.css");
if (process.env.NODE_ENV === "production") {
	module.exports = require("./src/quickbuilder.esm.min.js");
} else {
	module.exports = require("./dev/quickbuilder.esm.js");
}
