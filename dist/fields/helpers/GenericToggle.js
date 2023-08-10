import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { useMemo, createElement } from 'react';
import classNames from 'classnames';
import Label from '../../core/components/Label.js';
import '@babel/runtime/helpers/extends';
import '../../core/hooks/useBuilderContext.js';
import { isObject, isString } from '../../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import '@wordpress/hooks';
import withLabel from '../../core/hooks/withLabel.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import { GenericInput } from '../Input.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var GenericToggle = function GenericToggle(props) {
  var _styles$label, _styles$label2, _classNames;
  var prevStyles = props.style;
  var styles = _objectSpread({
    type: "",
    // card
    label: {
      position: "right"
    },
    column: 4
  }, prevStyles);
  var isChecked = useMemo(function () {
    var _isChecked = false;
    if (props !== null && props !== void 0 && props.checked && isObject(props.checked) && isString(props === null || props === void 0 ? void 0 : props.value)) {
      _isChecked = props.checked[props.value];
    } else {
      if (!isString(props.value)) {
        _isChecked = props.value;
      }
    }
    return _isChecked;
  }, [props === null || props === void 0 ? void 0 : props.checked, props.value]);
  var componentClasses = classNames("wprf-toggle-wrap", (_classNames = {}, _defineProperty(_classNames, "wprf-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type.length) > 0), _defineProperty(_classNames, "wprf-checked", Boolean(isChecked)), _defineProperty(_classNames, "wprf-label-position-".concat(styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position), styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position), _classNames), props === null || props === void 0 ? void 0 : props.classes);
  return createElement("div", {
    className: componentClasses
  }, createElement(GenericInput, _objectSpread(_objectSpread({}, props), {}, {
    type: 'checkbox',
    placeholder: undefined
  })), createElement(Label, {
    htmlFor: props.id
  }));
};
var GenericToggle$1 = withLabel(GenericToggle);

export { GenericToggle$1 as default };
