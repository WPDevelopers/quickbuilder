import _extends from '@babel/runtime/helpers/extends';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState, useEffect, createElement, Fragment } from 'react';
import { sortingFields, isString } from '../../core/utils.js';
import Field, { GenericField } from '../Field.js';
import '@wordpress/components';
import '@wordpress/compose';
import '../../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import '@babel/runtime/helpers/defineProperty';
import 'sweetalert2';
import '@wordpress/data';
import '@wordpress/hooks';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import '../Input.js';
import Loading from './Loading.js';

var ModalContent = function ModalContent(props) {
  var _props$body;
  var isLoading = props.isLoading;
    props.closeModal;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fields = _useState2[0],
    setFields = _useState2[1];
  useEffect(function () {
    var newFields = sortingFields(props.body.fields);
    // context.setFormField([...props.parentIndex, 'fields'], newFields);
    var allFields = newFields.map(function (item, index) {
      var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
      return createElement(Field, _extends({
        key: item.name
      }, item, {
        parentIndex: parentIndex
      }));
    });
    setFields(allFields);
  }, []);
  return createElement("div", {
    className: "wprf-modal-body"
  }, isLoading && createElement(Loading, null), !isLoading && createElement(Fragment, null, createElement("div", {
    className: "wprf-modal-content"
  }, fields.length > 0 && fields), createElement("div", {
    className: "wprf-modal-footer clearfix"
  }, createElement("div", {
    className: "wprf-modal-footer-left"
  }, ((_props$body = props.body) === null || _props$body === void 0 ? void 0 : _props$body.footer) && isString(props.body.footer) && createElement("p", null, props.body.footer), createElement(GenericField, _extends({
    type: "button"
  }, props === null || props === void 0 ? void 0 : props.confirm_button))))));
};

export { ModalContent as default };
