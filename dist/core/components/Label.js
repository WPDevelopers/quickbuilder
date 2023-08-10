import { createElement } from 'react';
import classNames from 'classnames';
import '@babel/runtime/helpers/defineProperty';
import Image from './Image.js';
import '@babel/runtime/helpers/extends';
import '../hooks/useBuilderContext.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import '@wordpress/i18n';
import '@wordpress/date';
import 'moment';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import '@wordpress/hooks';
import '@babel/runtime/helpers/objectWithoutProperties';

var Label = function Label(props) {
  var _props$badge, _props$badge2, _props$badge3;
  var componentClasses = classNames("wprf-input-label", props === null || props === void 0 ? void 0 : props.className);
  return createElement("label", {
    htmlFor: props === null || props === void 0 ? void 0 : props.htmlFor,
    className: componentClasses
  }, (props === null || props === void 0 || (_props$badge = props.badge) === null || _props$badge === void 0 ? void 0 : _props$badge.value) && createElement("div", {
    className: "wprf-badge"
  }, createElement("sup", {
    className: classNames("wprf-badge-item", {
      'wprf-badge-active': props === null || props === void 0 || (_props$badge2 = props.badge) === null || _props$badge2 === void 0 ? void 0 : _props$badge2.active
    })
  }, props === null || props === void 0 || (_props$badge3 = props.badge) === null || _props$badge3 === void 0 ? void 0 : _props$badge3.label)), !(props !== null && props !== void 0 && props.src) && (props === null || props === void 0 ? void 0 : props.children), (props === null || props === void 0 ? void 0 : props.src) && createElement(Image, {
    className: "wprf-label-image",
    src: props.src,
    alt: props === null || props === void 0 ? void 0 : props.label
  }));
};

export { Label as default };
