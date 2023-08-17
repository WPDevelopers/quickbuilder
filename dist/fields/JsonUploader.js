import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { createElement, useState, useEffect } from 'react';
import { addFilter } from '@wordpress/hooks';
import { validFieldProps } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import { __ } from '@wordpress/i18n';
import '../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/defineProperty';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/extends';
import 'classnames';

var _JsonUploader = function _JsonUploader(props) {
  validFieldProps(props, ["is_pro", "visible", "trigger", "disable", "parentIndex", "context", "copyOnClick"]);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    uploadedFile = _useState2[0],
    setUploadedFile = _useState2[1];
  var handleChange = function handleChange(e) {
    if (!e.target.files.length) {
      return;
    }
    var file = e.target.files[0];
    if ((file === null || file === void 0 ? void 0 : file.size) == 0) {
      props.context.alerts.toast('error', __("File can't be empty.", 'notificationx'));
      return;
    } else if ((file === null || file === void 0 ? void 0 : file.type) != 'application/json' && (file === null || file === void 0 ? void 0 : file.type) != 'text/json') {
      props.context.alerts.toast('error', __("Invalid file type.", 'notificationx'));
      return;
    }
    setUploadedFile(file);
    var reader = new FileReader();
    reader.onload = function (event) {
      var _event$target;
      var json = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
      props.onChange({
        target: {
          type: 'jsonuploader',
          name: props.name,
          value: json
        }
      });
    };
    reader.readAsText(file);
  };
  var removeFile = function removeFile() {
    setUploadedFile(null);
    props.onChange({
      target: {
        type: 'jsonuploader',
        name: props.name,
        value: null
      }
    });
  };
  useEffect(function () {
    if (!(props !== null && props !== void 0 && props.value)) {
      setUploadedFile(null);
    }
  }, [props === null || props === void 0 ? void 0 : props.value]);
  return createElement("span", {
    className: "wprf-json-uploader"
  }, !uploadedFile && createElement("label", {
    className: "wprf-json-uploaderButton"
  }, createElement("span", null, __("Upload")), createElement("input", {
    type: "file",
    accept: "application/JSON",
    onChange: function onChange(e) {
      handleChange(e);
    }
  })), uploadedFile && (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name) && createElement("span", {
    className: "wpfr-json-file-name-wrapper"
  }, createElement("span", {
    className: "wpfr-json-file-name"
  }, (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.length) > 20 ? "".concat(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.substr(0, 9), "...").concat(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.substr((uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name.length) - 7)) : uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name), createElement("span", {
    className: "wprf-json-file-delete-button",
    onClick: removeFile
  }, "x")));
};
var JsonUploader = withLabel( /*#__PURE__*/React.memo(_JsonUploader));
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('jsonuploader' === type) {
    return createElement(JsonUploader, props);
  }
  return field;
});

export { JsonUploader as default };
