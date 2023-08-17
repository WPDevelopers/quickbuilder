import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useCallback } from 'react';
import { GenericField } from './Field.js';
import '@wordpress/components';
import '@wordpress/compose';
import '../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/defineProperty';
import 'classnames';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import { __ } from '@wordpress/i18n';
import 'sweetalert2';
import '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import './Input.js';
import ModalContent from './helpers/ModalContent.js';
import ModalHeader from './helpers/ModalHeader.js';
import SweetAlert from 'react-bootstrap-sweetalert';

var Modal = function Modal(props) {
  var _props$body;
  if ((props === null || props === void 0 ? void 0 : props.body) == undefined || (props === null || props === void 0 ? void 0 : props.button) == undefined) {
    throw new Error(__('Modal needs button/body with it.', 'notificationx'));
  }
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0];
    _useState4[1];
  var openModal = function openModal() {
    return setOpen(true);
  };
  var closeModal = function closeModal() {
    return setOpen(false);
  };
  var onConfirm = useCallback(function () {}, []);
  return createElement("div", {
    className: "wprf-control wprf-modal",
    id: "wprf-modal-".concat(props.name)
  }, createElement(GenericField, _extends({
    type: "button"
  }, props === null || props === void 0 ? void 0 : props.button, {
    onClick: openModal
  })), isOpen && createElement(SweetAlert, {
    customClass: "wprf-modal-inner",
    style: {
      maxWidth: '900px',
      width: '100%',
      overflowY: 'scroll',
      margin: '50px auto'
    },
    closeBtnStyle: {
      top: '5px',
      right: '5px',
      color: '#f78c8c',
      fontSize: '18px',
      border: '1px solid #f78c8c',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: createElement(ModalHeader, {
      content: props === null || props === void 0 || (_props$body = props.body) === null || _props$body === void 0 ? void 0 : _props$body.header
    }),
    onConfirm: onConfirm,
    showConfirm: false,
    showCloseButton: true,
    closeOnClickOutside: true,
    onCancel: closeModal,
    afterUpdate: function afterUpdate() {
      if (props !== null && props !== void 0 && props.cancel) {
        var _props$context$values;
        if ((_props$context$values = props.context.values) !== null && _props$context$values !== void 0 && _props$context$values[props.cancel]) {
          closeModal();
        }
      }
    }
  }, createElement(ModalContent, _extends({}, props, {
    isLoading: isLoading,
    closeModal: closeModal,
    context: props.context,
    onConfirm: onConfirm
  }))));
};
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('modal' === type) {
    return createElement(Modal, props);
  }
  return field;
});

export { Modal as default };
