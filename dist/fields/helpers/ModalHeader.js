import { createElement } from 'react';
import { isString } from '../../core/utils.js';

var ModalHeader = function ModalHeader(_ref) {
  var content = _ref.content;
  return createElement("div", {
    className: "wprf-modal-header"
  }, content && isString(content) && createElement("h3", null, content));
};

export { ModalHeader as default };
