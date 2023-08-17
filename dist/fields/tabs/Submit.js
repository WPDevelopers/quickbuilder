import _objectDestructuringEmpty from '@babel/runtime/helpers/objectDestructuringEmpty';
import _extends from '@babel/runtime/helpers/extends';
import { useCallback, createElement } from 'react';
import { Button } from '@wordpress/components';
import useBuilderContext from '../../core/hooks/useBuilderContext.js';
import { __ } from '@wordpress/i18n';

var Submit = function Submit(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var context = useBuilderContext();
  var label = (props === null || props === void 0 ? void 0 : props.label) || __('Save Changes', 'notificationx');
  var handleSubmit = useCallback(function (event) {
    var _context$submit;
    if ((_context$submit = context.submit) !== null && _context$submit !== void 0 && _context$submit.onSubmit) {
      context.submit.onSubmit(event, context);
      return;
    }
    // console.log('on submit wprf.');
  }, [context]);
  return createElement("div", {
    className: "wprf-submit wprf-control"
  }, createElement(Button, {
    className: "wprf-submit-button",
    onClick: handleSubmit
  }, label));
};

export { Submit as default };
