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
exports.BuilderConsumer = exports.BuilderProvider = exports.BuilderContext = void 0;
var React = __importStar(require("react"));
var tiny_warning_1 = __importDefault(require("tiny-warning"));
exports.BuilderContext = React.createContext(undefined);
exports.BuilderContext.displayName = process.env.NODE_ENV === 'production' ? 'Anonymous' : 'BuilderContext';
exports.BuilderProvider = exports.BuilderContext.Provider;
exports.BuilderConsumer = exports.BuilderContext.Consumer;
function useBuilderContext() {
    var builderContext = React.useContext(exports.BuilderContext);
    tiny_warning_1.default(!!builderContext, "BuilderContext context is undefined, please verify you are calling useBuilderContext() as child of a <FormBuilder> component.");
    return builderContext;
}
exports.default = useBuilderContext;
//# sourceMappingURL=useBuilderContext.js.map