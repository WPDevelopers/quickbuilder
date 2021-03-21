"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var form_builder_1 = __importDefault(require("./form-builder"));
var default_1 = __importDefault(require("./form-builder/config/default"));
(function () {
    var App = function () {
        return react_1.default.createElement(form_builder_1.default, __assign({}, default_1.default));
    };
    react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
})();
//# sourceMappingURL=index.js.map