import _extends from '@babel/runtime/helpers/extends';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, Fragment } from 'react';
import classNames from 'classnames';
import { validFieldProps, isObject, hitAAJX } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import { __ } from '@wordpress/i18n';
import '../core/hooks/useBuilderContext.js';
import useTrigger from '../core/hooks/useTrigger.js';
import '@babel/runtime/helpers/defineProperty';
import 'sweetalert2';
import '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import withLabel from '../core/hooks/withLabel.js';
import Field from './Field.js';

var _Button = function _Button(props) {
  var _props$onClick, _props$text, _props$text2, _props$text3;
  if (!(props !== null && props !== void 0 && props.text) && (props === null || props === void 0 ? void 0 : props.group) !== true) {
    throw new Error(__('Button has a required params #text.', 'notificationx'));
  }
  var validProps = validFieldProps(props, ["is_pro", "visible", "disable", "parentIndex", "context", "onBlur", "value", 'ajax', 'text']);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var handleClick = function handleClick(event) {
    if (props !== null && props !== void 0 && props.ajax) {
      setIsLoading(true);
      hitAAJX(props.ajax, props.context).then(function (res) {
        var _props$ajax, _props$ajax5;
        setIsLoading(false);
        if ((res === null || res === void 0 ? void 0 : res.status) == 'error') {
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        }
        props.onChange({
          target: {
            type: 'button',
            name: props.name,
            value: true
          }
        });
        if (!((_props$ajax = props.ajax) !== null && _props$ajax !== void 0 && _props$ajax.hideSwal)) {
          var _props$ajax2, _props$ajax3, _props$ajax4;
          var type = ((_props$ajax2 = props.ajax) === null || _props$ajax2 === void 0 || (_props$ajax2 = _props$ajax2.swal) === null || _props$ajax2 === void 0 ? void 0 : _props$ajax2.icon) || 'success';
          var message = ((_props$ajax3 = props.ajax) === null || _props$ajax3 === void 0 || (_props$ajax3 = _props$ajax3.swal) === null || _props$ajax3 === void 0 ? void 0 : _props$ajax3.text) || 'Complete';
          props.context.alerts.toast(type, message, {
            autoClose: (_props$ajax4 = props.ajax) === null || _props$ajax4 === void 0 || (_props$ajax4 = _props$ajax4.swal) === null || _props$ajax4 === void 0 ? void 0 : _props$ajax4.autoClose
          });
        }
        if ((_props$ajax5 = props.ajax) !== null && _props$ajax5 !== void 0 && _props$ajax5.reload) {
          setTimeout(function () {
            return window.location.reload();
          }, 1000);
        }
      })["catch"](function (err) {
        var _props$ajax6;
        console.error('Error In Button Called', props.name, err);
        setIsLoading(false);
        //TODO: need to be fixed.
        props.onChange({
          target: {
            type: 'button',
            name: props.name,
            value: false
          }
        });
        if (!((_props$ajax6 = props.ajax) !== null && _props$ajax6 !== void 0 && _props$ajax6.hideSwal)) {
          props.context.alerts.toast('error', (err === null || err === void 0 ? void 0 : err.message) || __("Something went wrong.", 'notificationx'));
        }
      });
    }
    useTrigger(props);
  };
  if (props !== null && props !== void 0 && props.href) {
    return createElement("a", {
      href: (props === null || props === void 0 ? void 0 : props.href) === -1 ? props === null || props === void 0 ? void 0 : props.value : props === null || props === void 0 ? void 0 : props.href,
      target: props === null || props === void 0 ? void 0 : props.target,
      className: classNames('wprf-control wprf-button wprf-href-btn', props === null || props === void 0 ? void 0 : props.classes)
    }, props === null || props === void 0 ? void 0 : props.text);
  }
  if (props !== null && props !== void 0 && props.group) {
    var allFields = props.fields.map(function (item, index) {
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
      return createElement(Field, _extends({
        key: item.name
      }, item, {
        parentIndex: parentIndex
      }));
    });
    return createElement("div", {
      className: "wprf-control wprf-button-group wprf-flex"
    }, allFields);
  }
  return createElement(Fragment, null, createElement("button", _extends({}, validProps, {
    name: props.name,
    disabled: isLoading,
    onClick: (_props$onClick = props === null || props === void 0 ? void 0 : props.onClick) !== null && _props$onClick !== void 0 ? _props$onClick : handleClick,
    className: classNames('wprf-control wprf-button wprf-btn', props === null || props === void 0 ? void 0 : props.classes)
  }), isObject(props === null || props === void 0 ? void 0 : props.text) && props !== null && props !== void 0 && props.ajax ? isLoading ? props === null || props === void 0 || (_props$text = props.text) === null || _props$text === void 0 ? void 0 : _props$text.loading : props.value ? props === null || props === void 0 || (_props$text2 = props.text) === null || _props$text2 === void 0 ? void 0 : _props$text2.saved : props === null || props === void 0 || (_props$text3 = props.text) === null || _props$text3 === void 0 ? void 0 : _props$text3.normal : props === null || props === void 0 ? void 0 : props.text));
};
var Button = withLabel(_Button);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('button' === type) {
    return createElement(Button, props);
  }
  return field;
});

export { Button as default };
