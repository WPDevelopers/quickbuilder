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
var classnames_1 = __importDefault(require("classnames"));
/**
 * Registering a store.
 */
var data_1 = require("@wordpress/data");
var store_1 = __importDefault(require("./store"));
data_1.registerStore("formbuilder", store_1.default);
var Tab_1 = __importDefault(require("./tabs/Tab"));
var FormBuilder = function (props) {
    var _a;
    console.log("FormBuilder props", props);
    var componentClasses = classnames_1.default("wp-react-form wprf-tabs-wrapper", props === null || props === void 0 ? void 0 : props.className, {
        "wprf-tab-menu-as-sidebar": (_a = props.config) === null || _a === void 0 ? void 0 : _a.sidebar,
    });
    return (react_1.default.createElement("div", { className: componentClasses },
        react_1.default.createElement(Tab_1.default, __assign({}, props))));
};
exports.default = FormBuilder;
//# sourceMappingURL=FormBuilder.js.map