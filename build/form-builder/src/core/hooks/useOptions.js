"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var index_1 = require("./index");
var useOptions = function (props, propertyName) {
    var _a;
    if (propertyName === void 0) { propertyName = 'fields'; }
    if (!(props === null || props === void 0 ? void 0 : props[propertyName])) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }
    var field = props.field, meta = props.meta;
    var builderContext = index_1.useBuilderContext();
    var options = builderContext.eligibleOptions(props[propertyName]);
    var selectedOption = builderContext.eligibleOption(options, meta.value, (_a = field.multiple) !== null && _a !== void 0 ? _a : false);
    var option;
    if (!field.multiple) {
        option = selectedOption.value || meta.default;
    }
    else {
        option = (utils_1.isArray(selectedOption) && selectedOption.map(function (o) { return o.value; })) || meta.default;
    }
    // useEffect(() => {
    //     if( option ) {
    //         builderContext.setFieldValue(field.name, option);
    //     }
    // }, [option])
    return { options: options, option: option, selectedOption: selectedOption };
};
exports.default = useOptions;
//# sourceMappingURL=useOptions.js.map