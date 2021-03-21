"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var useDefaults = function (parentName, helpers, meta, trigger) {
    if (trigger != undefined && (trigger === null || trigger === void 0 ? void 0 : trigger.defaults) != undefined && !utils_1.isEmptyObj(trigger.defaults)) {
        var defaults = trigger.defaults;
        if (defaults != undefined && !utils_1.isEmptyObj(defaults)) {
            for (var obj in defaults) {
                if (obj === (meta.value || meta.default)) {
                    var at = defaults[obj].indexOf("@"), colon = defaults[obj].indexOf(":");
                    if (at === 0 && colon > 0) {
                        var eligibleKey = defaults[obj].substr(1, colon - 1);
                        var eligibleDataToSet = defaults[obj].substr(colon + 1);
                        var eligibleDefaultData = helpers.getValueForDefault(eligibleKey, parentName);
                        if (eligibleKey != "" && eligibleDataToSet != "") {
                            helpers.setValue(eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
                        }
                    }
                }
            }
        }
    }
};
exports.default = useDefaults;
//# sourceMappingURL=useDefaults.js.map