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
var react_1 = __importStar(require("react"));
var Menu_1 = __importDefault(require("./Menu"));
var Content_1 = __importDefault(require("./Content"));
var useBuilderContext_1 = require("../core/hooks/useBuilderContext");
require("../scss/index.scss");
var useBuilder_1 = __importDefault(require("../core/hooks/useBuilder"));
var Tab = function (props) {
    var builderContextState = useBuilder_1.default(props);
    var _a = react_1.useState(props.config.active), activeTab = _a[0], setActiveTab = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(useBuilderContext_1.BuilderProvider, { value: builderContextState },
            react_1.default.createElement(Menu_1.default, { active: activeTab, setActive: function (tabId) { return setActiveTab(tabId); }, tabs: props.tabs, config: props.config }),
            react_1.default.createElement(Content_1.default, { tabs: props.tabs, active: activeTab }))));
};
exports.default = Tab;
//# sourceMappingURL=Tab.js.map