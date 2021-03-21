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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Popover = function (props) {
    if (!props.children) {
        throw new Error('Popover must have children to render.');
    }
    if (!props.renderToggle) {
        throw new Error('Popover must have renderToggle as props .');
    }
    var ref = react_1.useRef(null);
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    // const onToggle = useCallback(
    //     () => {
    //         console.log('ddd', !isOpen)
    //     },
    //     [],
    // )
    // const onToggle = (event) => {
    //     setIsOpen(!isOpen);
    // }
    var toggle = function (event) {
        setIsOpen(!isOpen);
    };
    var args = { isOpen: isOpen, onToggle: toggle };
    return (react_1.default.createElement("div", { className: "wprf-control-popover" },
        props.renderToggle(args),
        isOpen &&
            react_1.default.createElement("div", { className: "wprf-control-popover-content", ref: ref }, props.children)));
};
exports.default = Popover;
//# sourceMappingURL=Popover.js.map