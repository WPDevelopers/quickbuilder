import { isEmptyObj, isString, isArray, isObject } from '../utils.js';

var useDefaults = function useDefaults(parentName, helpers, value, trigger) {
  if (trigger != undefined && (trigger === null || trigger === void 0 ? void 0 : trigger.defaults) != undefined && !isEmptyObj(trigger.defaults)) {
    var defaults = trigger.defaults;
    if (defaults != undefined && !isEmptyObj(defaults)) {
      var defaultsData = {};
      if (defaults !== null && defaults !== void 0 && defaults[value] && isString(defaults === null || defaults === void 0 ? void 0 : defaults[value])) {
        var at = defaults[value].indexOf("@"),
          colon = defaults[value].indexOf(":");
        if (at === 0 && colon > 0) {
          var eligibleKey = defaults[value].substr(1, colon - 1);
          var eligibleDataToSet = defaults[value].substr(colon + 1);
          var eligibleDefaultData = helpers.getValueForDefault(eligibleKey, parentName);
          if (eligibleKey != "" && eligibleDataToSet != "") {
            eligibleDataToSet = eligibleDataToSet === 'false' ? false : eligibleDataToSet;
            defaultsData[eligibleKey] = eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet;
            helpers.setValue(eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
          }
        }
      } else if (defaults !== null && defaults !== void 0 && defaults[value] && (isArray(defaults[value]) || isObject(defaults[value]))) {
        for (var property in defaults[value]) {
          var eachKey = defaults[value][property];
          if (eachKey && (isArray(eachKey) || isObject(eachKey))) {
            var _eligibleDefaultData = helpers.getValueForDefault(property, parentName);
            if (property != "" && eachKey != "") {
              eachKey = eachKey === 'false' ? false : eachKey;
              defaultsData[property] = _eligibleDefaultData ? _eligibleDefaultData : eachKey;
              helpers.setValue(property, _eligibleDefaultData ? _eligibleDefaultData : eachKey);
            }
          } else if (eachKey) {
            var _at = eachKey.indexOf("@"),
              _colon = eachKey.indexOf(":");
            if (_at === 0 && _colon > 0) {
              var _eligibleKey = eachKey.substr(1, _colon - 1);
              var _eligibleDataToSet = eachKey.substr(_colon + 1);
              if (eachKey.indexOf(".") > -1) {
                _eligibleKey = _eligibleKey.split('.');
              }
              var _eligibleDefaultData2 = helpers.getValueForDefault(_eligibleKey, parentName);
              if (_eligibleKey != "" && _eligibleDataToSet != "") {
                _eligibleDataToSet = _eligibleDataToSet === 'false' ? false : _eligibleDataToSet;
                defaultsData[_eligibleKey] = _eligibleDefaultData2 ? _eligibleDefaultData2 : _eligibleDataToSet;
                helpers.setValue(_eligibleKey, _eligibleDefaultData2 ? _eligibleDefaultData2 : _eligibleDataToSet);
              }
            }
          }
        }
      }
      return {
        defaultsData: defaultsData
      };
    }
  }
};

export { useDefaults as default };
