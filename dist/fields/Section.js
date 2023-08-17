import _extends from '@babel/runtime/helpers/extends';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { createElement, useState, useEffect } from 'react';
import { sortingFields } from '../core/utils.js';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
import classNames from 'classnames';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import { addFilter } from '@wordpress/hooks';
import Submit from './tabs/Submit.js';
import Field from './Field.js';

var _Section = function _Section(props) {
  var _props$collapsed;
  var builderContext = useBuilderContext();
  var _useState = useState((_props$collapsed = props.collapsed) !== null && _props$collapsed !== void 0 ? _props$collapsed : false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapse = _useState2[0],
    setCollapse = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    fields = _useState4[0],
    setFields = _useState4[1];
  useEffect(function () {
    var newFields = sortingFields(props.fields);
    /**
     * FIXME: the line below the doc:
     * Commented for Issue#11, Cycle 7
     * Uncommented for Issue #38, Cycle 7
     */
    builderContext.setFormField([].concat(_toConsumableArray(props.parentIndex), ['fields']), newFields);
    // builderContext.setFormField([...props.parentIndex, 'sorted'], true);
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
  var componentClasses = classNames('wprf-control-section', props === null || props === void 0 ? void 0 : props.classes, props === null || props === void 0 ? void 0 : props.name, {
    'wprf-section-collapsed': (props === null || props === void 0 ? void 0 : props.collapsible) && isCollapse
  });
  return createElement("div", {
    id: props === null || props === void 0 ? void 0 : props.name,
    className: componentClasses
  }, props.placeholder && createElement("div", {
    className: "wprf-section-title"
  }, createElement("h4", null, props.placeholder), props.collapsible && createElement("button", {
    onClick: function onClick() {
      return setCollapse(!isCollapse);
    }
  }, createElement(Icon, {
    icon: isCollapse ? chevronDown : chevronUp
  })), (props === null || props === void 0 ? void 0 : props.sub_title) && createElement("p", {
    dangerouslySetInnerHTML: {
      __html: props === null || props === void 0 ? void 0 : props.sub_title
    }
  })), createElement("div", {
    className: "wprf-section-fields"
  }, fields), props.showSubmit && createElement(Submit, builderContext.submit));
};
var Section = /*#__PURE__*/React.memo(_Section);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('section' === type) {
    return createElement(Section, props);
  }
  return field;
});

export { Section as default };
