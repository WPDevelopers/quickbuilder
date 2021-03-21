"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("@wordpress/components");
var compose_1 = require("@wordpress/compose");
var MyPopover = compose_1.withState({
    isVisible: false,
})(function (_a) {
    var isVisible = _a.isVisible, setState = _a.setState;
    var toggleVisible = function () {
        setState(function (state) { return ({ isVisible: !state.isVisible }); });
    };
    return (react_1.default.createElement(components_1.Button, { isSecondary: true, onClick: toggleVisible },
        "Toggle Popover!",
        isVisible && (react_1.default.createElement(components_1.Popover, null, "Popover is toggled!"))));
});
exports.default = MyPopover;
//# sourceMappingURL=Test.js.map