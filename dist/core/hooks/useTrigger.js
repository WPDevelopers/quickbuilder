import { isArray, isObject } from '../utils.js';

var useTrigger = function useTrigger(props) {
  var builderContext = props.context;
  if (props !== null && props !== void 0 && props.trigger && isArray(props === null || props === void 0 ? void 0 : props.trigger)) {
    props === null || props === void 0 ? void 0 : props.trigger.map(function (trigger) {
      var triggerType = (trigger === null || trigger === void 0 ? void 0 : trigger.type) || 'setFieldValue';
      if (trigger !== null && trigger !== void 0 && trigger.action && isObject(trigger === null || trigger === void 0 ? void 0 : trigger.action)) {
        for (var key in trigger === null || trigger === void 0 ? void 0 : trigger.action) {
          var eligibleKey = key;
          if (eligibleKey.indexOf(".") > -1) {
            eligibleKey = eligibleKey.split('.');
          }
          var eligibleData = trigger === null || trigger === void 0 ? void 0 : trigger.action[key];
          // let eligibleDefaultData = builderContext.getFieldHelpers().getValueForDefault( eligibleKey, props.name );
          // data should be nullable.
          if (eligibleKey != "") {
            // && eligibleData !== ""
            builderContext[triggerType](eligibleKey, eligibleData); //eligibleDefaultData ? eligibleDefaultData :
          }
        }
      }
    });
  }
};

export { useTrigger as default };
