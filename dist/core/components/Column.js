import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createElement } from 'react';
import classNames from 'classnames';

var Column = function Column(props) {
  var _classNames;
  var componentClasses = classNames("wprf-column", props === null || props === void 0 ? void 0 : props.className, (_classNames = {}, _defineProperty(_classNames, "wprf-column-".concat(12 / (props === null || props === void 0 ? void 0 : props.column)), (props === null || props === void 0 ? void 0 : props.column) && props.column !== 12), _defineProperty(_classNames, "wprf-column-12", props.column === 12), _classNames));
  return createElement("div", {
    className: componentClasses
  }, props === null || props === void 0 ? void 0 : props.children);
};

export { Column as default };
