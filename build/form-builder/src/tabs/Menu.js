"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Menu = function (props) {
    if (props.tabs === undefined) {
        throw new Error("There are no tabs defined!");
    }
    var active = props.active, setActive = props.setActive, tabs = props.tabs, config = props.config;
    var componentClasses = classnames_1.default("wprf-tab-menu-wrapper", props === null || props === void 0 ? void 0 : props.className, { "wprf-tab-menu-sidebar": config === null || config === void 0 ? void 0 : config.sidebar });
    return (React.createElement("div", { className: componentClasses },
        React.createElement("ul", { className: "wprf-tab-nav" }, tabs.map(function (tab) {
            var _a;
            return (React.createElement("li", { className: classnames_1.default("wprf-tab-nav-item", (_a = {},
                    _a["" + tab.classes] = tab.classes,
                    _a["wprf-active-nav"] = active === tab.id,
                    _a)), "data-key": tab.id, key: tab.id, onClick: function () { return setActive(tab.id); } }, tab.label));
        }))));
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map