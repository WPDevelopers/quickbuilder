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
var components_1 = require("../core/components");
var react_select_1 = __importDefault(require("react-select"));
var useOptions_1 = __importDefault(require("../core/hooks/useOptions"));
var utils_1 = require("../core/utils");
var Select = function (props) {
    var meta = props.meta, helpers = props.helpers, field = props.field;
    var label = field.label, id = field.id, name = field.name, multiple = field.multiple, placeholder = field.placeholder, _a = field.search, search = _a === void 0 ? false : _a;
    var _b = useOptions_1.default(props, 'options'), options = _b.options, option = _b.option, selectedOption = _b.selectedOption;
    var _c = react_1.useState(null), sOption = _c[0], setSOption = _c[1];
    react_1.useEffect(function () {
        if (!utils_1.isArray(sOption) && utils_1.isObject(sOption)) {
            helpers.setValue(name, sOption.value);
        }
        if (utils_1.isArray(sOption)) {
            helpers.setValue(name, sOption.map(function (item) { return item.value; }));
        }
    }, [sOption]);
    if (placeholder == undefined) {
        placeholder = label;
    }
    return (react_1.default.createElement("div", { className: "wprf-select-wrapper" },
        react_1.default.createElement(components_1.Label, { htmlFor: id }, label),
        react_1.default.createElement(react_select_1.default, { classNamePrefix: "wprf-select", isSearchable: search !== null && search !== void 0 ? search : false, id: id, name: name, isMulti: multiple !== null && multiple !== void 0 ? multiple : false, placeholder: placeholder, options: options, value: selectedOption, 
            // onMenuOpen={() => console.log(true)}
            // onMenuClose={() => console.log(false)}
            onChange: function (option) { return setSOption(option); } })));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map