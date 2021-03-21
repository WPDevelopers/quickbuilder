"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var utils_1 = require("../core/utils");
var InnerContent_1 = __importDefault(require("../core/InnerContent"));
var Content = function (_a) {
    var tabs = _a.tabs, active = _a.active;
    if (tabs === undefined) {
        throw new Error("There are no #tabs args defined in props.");
    }
    // if (!tabs?.id) {
    // 	throw Error("Each Tab Must Have an Unique ID. i.e: id: tab_one");
    // }
    // if (!tabs?.fields) {
    // 	throw Error("Each tab must have some fields.");
    // }
    // sorting tabs
    var newTabs = utils_1.sortingFields(tabs);
    if (!utils_1.isArray(newTabs)) {
        throw new Error('Not an array.');
    }
    return (react_1.default.createElement("div", { className: "wprf-tab-content-wrapper" }, newTabs.map(function (tab) {
        var componentClasses = classnames_1.default("wprf-tab-content", "wprf-tab-" + (tab === null || tab === void 0 ? void 0 : tab.id), {
            "wprf-active": active === tab.id,
        });
        return (react_1.default.createElement("div", { id: tab === null || tab === void 0 ? void 0 : tab.id, className: componentClasses, key: tab === null || tab === void 0 ? void 0 : tab.id },
            react_1.default.createElement(InnerContent_1.default, { fields: tab === null || tab === void 0 ? void 0 : tab.fields })));
    })));
};
exports.default = Content;
//# sourceMappingURL=Content.js.map