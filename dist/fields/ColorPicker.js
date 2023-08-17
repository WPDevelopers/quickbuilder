import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useRef, useEffect, Fragment } from 'react';
import { ColorPicker as ColorPicker$1 } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import '../core/hooks/useBuilderContext.js';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/extends';
import 'classnames';

var _ColorPicker = function _ColorPicker(props) {
  var value = props.value,
    name = props.name,
    id = props.id,
    onChange = props.onChange;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPicker = _useState2[0],
    setShowPicker = _useState2[1];
  var _useState3 = useState(value || null),
    _useState4 = _slicedToArray(_useState3, 2),
    color = _useState4[0],
    setColor = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultColor = _useState6[0],
    setDefaultColor = _useState6[1];
  var closeRef = useRef(null);
  useEffect(function () {
    setDefaultColor(value);
  }, []);
  var handleCloseRef = function handleCloseRef(ref) {
    useEffect(function () {
      var handleClickOutside = function handleClickOutside(ev) {
        if (ref.current && !ref.current.contains(ev.target)) {
          setShowPicker(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useEffect(function () {
    onChange({
      target: {
        type: 'colorpicker',
        name: name,
        value: color
      }
    });
  }, [color]);
  handleCloseRef(closeRef);
  return createElement(Fragment, null, createElement("div", {
    className: "wprf-colorpicker-wrap",
    ref: closeRef
  }, createElement("input", {
    type: "hidden",
    value: value,
    name: name,
    id: id
  }), createElement("span", {
    className: "wprf-picker-display",
    style: {
      backgroundColor: value,
      borderColor: value
    },
    onClick: function onClick() {
      return setShowPicker(!showPicker);
    }
  }), showPicker && createElement(Fragment, null, createElement("button", {
    className: "wprf-colorpicker-reset",
    onClick: function onClick(e) {
      e.preventDefault();
      setColor(defaultColor);
      setShowPicker(false);
    }
  }, __('Reset', 'notificationx')), createElement(ColorPicker$1, {
    color: value,
    onChangeComplete: function onChangeComplete(event) {
      return setColor(event.hex);
    }
  }))));
};
var ColorPicker = withLabel(_ColorPicker);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('colorpicker' === type) {
    return createElement(ColorPicker, props);
  }
  return field;
});

export { ColorPicker as default };
