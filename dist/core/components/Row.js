import { createElement } from 'react';
import classNames from 'classnames';

var Row = function Row(props) {
  var componentClasses = classNames("wprf-row clearfix wprf-flex", props === null || props === void 0 ? void 0 : props.className);
  return createElement("div", {
    className: componentClasses
  }, props === null || props === void 0 ? void 0 : props.children);
};

export { Row as default };
