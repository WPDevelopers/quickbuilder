import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useEffect, Fragment } from 'react';
import { MediaUpload } from '@wordpress/media-utils';
import { addFilter } from '@wordpress/hooks';
import '../core/hooks/useBuilderContext.js';
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
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/extends';
import 'classnames';

var _Media = function _Media(props) {
  var _props$value;
  var _useState = useState((_props$value = props.value) !== null && _props$value !== void 0 && _props$value.url ? props.value : null),
    _useState2 = _slicedToArray(_useState, 2),
    imageData = _useState2[0],
    setImageData = _useState2[1];
  useEffect(function () {
    props.onChange({
      target: {
        type: 'media',
        name: props.name,
        value: imageData
      }
    });
  }, [imageData]);
  return createElement("div", {
    className: "wprf-control wprf-media"
  }, imageData != null && !(props !== null && props !== void 0 && props.notImage) && createElement("div", {
    className: "wprf-image-preview"
  }, imageData != null && (imageData === null || imageData === void 0 ? void 0 : imageData.url) && createElement("img", {
    src: imageData.url,
    alt: imageData.title
  })), createElement("div", {
    className: "wprf-image-uploader"
  }, createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      setImageData({
        id: media.id,
        title: media.title,
        url: media.url
      });
    },
    multiple: false,
    allowedTypes: ['image'],
    value: imageData,
    render: function render(_ref) {
      var open = _ref.open;
      return createElement(Fragment, null, imageData != null && createElement("button", {
        className: "wprf-btn wprf-image-remove-btn",
        onClick: function onClick() {
          return setImageData(null);
        }
      }, (props === null || props === void 0 ? void 0 : props.remove) || 'Remove'), createElement("button", {
        className: "wprf-btn wprf-image-upload-btn",
        onClick: open
      }, imageData != null ? (props === null || props === void 0 ? void 0 : props.reset) || 'Change Image' : (props === null || props === void 0 ? void 0 : props.button) || 'Upload'));
    }
  })));
};
var Media = withLabel(_Media);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('media' === type) {
    return createElement(Media, props);
  }
  return field;
});

export { Media as default };
