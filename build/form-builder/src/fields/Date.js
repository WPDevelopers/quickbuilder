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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("@wordpress/components");
var date_1 = require("@wordpress/date");
var DateControl = function (_a) {
    var field = _a.field, meta = _a.meta, helpers = _a.helpers, rest = __rest(_a, ["field", "meta", "helpers"]);
    var settings = date_1.__experimentalGetSettings();
    var is12HourTime = /a(?!\\)/i.test(settings.formats.datetime
        .toLowerCase()
        .replace(/\\\\/g, "")
        .split("")
        .reverse()
        .join(""));
    react_1.useEffect(function () {
        if (meta.value == undefined) {
            helpers.setValue(field.name, date_1.date('c', meta.value));
        }
    }, []);
    return (react_1.default.createElement(components_1.Dropdown, { className: "wprf-control-datetime", renderToggle: function (_a) {
            var isOpen = _a.isOpen, onToggle = _a.onToggle;
            return (react_1.default.createElement(components_1.Button, { isTertiary: true, onClick: onToggle }, date_1.date(settings.formats.datetime, meta.value, settings.timezone.string)));
        }, renderContent: function () {
            return (react_1.default.createElement(components_1.DateTimePicker, { currentDate: date_1.date(settings.formats.datetime, meta.value) || date_1.date(settings.formats.datetime, Date.now()), onChange: function (date) { return helpers.setValue(field.name, date !== null && date !== void 0 ? date : (meta.default || new Date())); }, is12Hour: is12HourTime }));
        } }));
};
exports.default = DateControl;
//# sourceMappingURL=Date.js.map