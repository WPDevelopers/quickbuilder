import _extends from '@babel/runtime/helpers/extends';
import { createElement, Fragment } from 'react';
import classNames from 'classnames';
import useBuilderContext from '../hooks/useBuilderContext.js';

var BadgeComp = function BadgeComp(_ref) {
  var componentClasses = _ref.componentClasses,
    label = _ref.label;
  return createElement("div", {
    className: "wprf-badge"
  }, createElement("sup", {
    className: componentClasses
  }, label));
};
var Badge = function Badge(props) {
  var builderContext = useBuilderContext();
  var label = props.label,
    active = props.active,
    _props$position = props.position,
    position = _props$position === void 0 ? 'right' : _props$position,
    renderLabel = props.renderLabel,
    renderComponent = props.renderComponent;
  if (label === undefined) {
    label = 'Pro';
  }
  var componentClasses = classNames('wprf-badge-item', {
    'wprf-badge-active': active
  });
  var componentProps = {};
  if (!builderContext.is_pro_active) {
    componentProps = {
      onClick: function onClick(e) {
        e.preventDefault();
        builderContext.alerts.pro_alert(props === null || props === void 0 ? void 0 : props.popup).fire();
      }
    };
  }
  return createElement("div", _extends({
    className: classNames("wprf-badge-wrapper", {
      "pro-deactivated": !builderContext.is_pro_active
    })
  }, componentProps), position === 'left' && label.length > 0 && createElement(Fragment, null, renderLabel(createElement(BadgeComp, {
    componentClasses: componentClasses,
    label: label
  }), 'left')), position === 'right' && label.length > 0 && createElement(Fragment, null, renderLabel(createElement(BadgeComp, {
    componentClasses: componentClasses,
    label: label
  }), 'right')), renderComponent());
};

export { Badge as default };
