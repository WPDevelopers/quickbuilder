import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useEffect, createElement } from 'react';
import { Button } from '@wordpress/components';
import useBuilderContext from '../../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import '@wordpress/i18n';
import '@wordpress/date';
import 'moment';
import 'sweetalert2';
import '@wordpress/data';
import '@wordpress/hooks';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import Field from '../Field.js';

var SteppedButton = function SteppedButton(props) {
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    nextTab = _useState2[0],
    setNextTab = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    prevTab = _useState4[0],
    setPrevTab = _useState4[1];
  useBuilderContext();
  useEffect(function () {
    var tabIds = props.fields.map(function (tab) {
      return tab.id;
    });
    var currentTabIndex = tabIds.findIndex(function (tab) {
      return tab === props.active;
    });
    if (currentTabIndex != -1) {
      setPrevTab(tabIds[currentTabIndex - 1]);
    }
    if (currentTabIndex <= tabIds.length) {
      setNextTab(tabIds[currentTabIndex + 1]);
    }
  }, [props.active, props.fields]);
  return createElement("div", {
    className: "wprf-stepped-button"
  }, props.config.buttons && Object.keys(props.config.buttons).map(function (button, index) {
    var _props$config$buttons, _props$config$buttons2, _props$config$buttons3;
    return createElement(React.Fragment, {
      key: "button_".concat(button, "_").concat(index)
    }, (button === 'next' && nextTab !== undefined || button === 'prev' && prevTab !== undefined) && createElement(Button, {
      className: "wprf-btn wprf-step-btn-".concat(button),
      onClick: function onClick() {
        return props.setActive(button === 'next' ? nextTab : prevTab);
      }
    }, (_props$config$buttons = props.config.buttons) === null || _props$config$buttons === void 0 ? void 0 : _props$config$buttons[button]), nextTab == undefined && ((_props$config$buttons2 = props.config.buttons) === null || _props$config$buttons2 === void 0 || (_props$config$buttons2 = _props$config$buttons2[button]) === null || _props$config$buttons2 === void 0 ? void 0 : _props$config$buttons2.type) && createElement(Field, (_props$config$buttons3 = props.config.buttons) === null || _props$config$buttons3 === void 0 ? void 0 : _props$config$buttons3[button]));
  }));
};
var SteppedButton$1 = /*#__PURE__*/React.memo(SteppedButton);

export { SteppedButton$1 as default };
