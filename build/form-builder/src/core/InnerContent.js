"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("./utils");
var BuilderField_1 = __importDefault(require("./BuilderField"));
var InnerContent = function (_a) {
    var fields = _a.fields;
    // Fields Sorting
    var newFields = utils_1.sortingFields(fields);
    var allFields = newFields.map(function (item) {
        return react_1.default.createElement(BuilderField_1.default, { key: item.name, field: item });
    });
    return react_1.default.createElement(react_1.default.Fragment, null, allFields);
};
exports.default = InnerContent;
//# sourceMappingURL=InnerContent.js.map