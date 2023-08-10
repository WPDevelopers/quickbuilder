import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useEffect } from 'react';
import { Button, RangeControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import 'classnames';
import '@babel/runtime/helpers/defineProperty';
import Label from '../core/components/Label.js';
import '@babel/runtime/helpers/extends';
import '../core/hooks/useBuilderContext.js';
import { isNumber, isString, isArray } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import 'sweetalert2';
import '@wordpress/data';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/toConsumableArray';

var Slider = function Slider(props) {
  var name = props.name,
    id = props.id,
    label = props.label,
    units = props.units,
    value = props.value,
    min = props.min,
    max = props.max,
    unit = props.unit;
    props.tooltip;
    var reset = props.reset;
  var _useState = useState(value || 0),
    _useState2 = _slicedToArray(_useState, 2),
    isValue = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(unit),
    _useState4 = _slicedToArray(_useState3, 2),
    sunit = _useState4[0],
    setSunit = _useState4[1];
  useEffect(function () {
    if (isValue) {
      var finalValue;
      if (isNumber(isValue)) {
        if (sunit) {
          finalValue = "".concat(isValue).concat(sunit);
        } else {
          finalValue = "".concat(isValue);
        }
      } else if (isString(isValue)) {
        if (!(isValue.indexOf(sunit) > -1)) {
          finalValue = "".concat(isValue).concat(sunit);
        } else {
          finalValue = "".concat(isValue);
        }
      }
      props.onChange({
        target: {
          type: 'slider',
          name: name,
          value: finalValue
        }
      });
    }
  }, [isValue, sunit]);
  return createElement("div", {
    className: "wprf-slider-wrap"
  }, createElement("div", {
    className: "wprf-slider-control-head"
  }, createElement(Label, {
    htmlFor: id || name
  }, label), isArray(units) && units.length > 0 && createElement("div", {
    className: "wprf-slider-units"
  }, units.map(function (unit, index) {
    return createElement(Button, {
      key: index,
      isSmall: true,
      isPrimary: true,
      onClick: function onClick() {
        return setSunit(unit);
      },
      className: unit == sunit ? "unit-active" : ""
    }, unit);
  }))), createElement("div", {
    className: "wprf-slider-control"
  }, createElement(RangeControl, {
    allowReset: reset !== null && reset !== void 0 ? reset : true,
    value: parseInt(isValue),
    min: min,
    max: max
    // showTooltip={tooltip ?? false}
    ,
    onChange: function onChange(value) {
      return setValue(value);
    }
  })));
};
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('slider' === type) {
    return createElement(Slider, props);
  }
  return field;
});

export { Slider as default };
