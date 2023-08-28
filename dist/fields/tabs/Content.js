import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React, { useState, useEffect, createElement } from 'react';
import { applyFilters } from '@wordpress/hooks';
import classNames from 'classnames';
import { isArray, isVisible } from '../../core/utils.js';
import InnerContent from './InnerContent.js';
import Submit from './Submit.js';
import SteppedButton from './SteppedButton.js';
import useBuilderContext from '../../core/hooks/useBuilderContext.js';
import when from '../../core/when.js';
import { __ } from '@wordpress/i18n';
import Field from '../Field.js';

var _excluded = ["fields", "active", "setActive", "submit"];
var Content = function Content(_ref) {
  var _builderContext$value, _builderContext$value2, _builderContext$value3, _rest$step, _rest$step2, _submit$show;
  var tabs = _ref.fields,
    active = _ref.active,
    setActive = _ref.setActive,
    submit = _ref.submit,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (tabs === undefined) {
    throw new Error(__("There are no #tabs args defined in props.", 'notificationx'));
  }
  var builderContext = useBuilderContext();
  var parentIndex = rest.parentIndex || [];
  if (!isArray(tabs)) {
    throw new Error(__('Not an array.', 'notificationx'));
  }
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tabsFields = _useState2[0],
    setTabsFields = _useState2[1];
  useEffect(function () {
    var filteredTabs = tabs.filter(function (tab) {
      return isVisible(builderContext === null || builderContext === void 0 ? void 0 : builderContext.values, tab);
    });
    setTabsFields(filteredTabs);
  }, [tabs, builderContext === null || builderContext === void 0 || (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value.source]);
  return createElement("div", {
    className: classNames("wprf-tab-content-wrapper", builderContext === null || builderContext === void 0 || (_builderContext$value2 = builderContext.values) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2.source, builderContext === null || builderContext === void 0 || (_builderContext$value3 = builderContext.values) === null || _builderContext$value3 === void 0 ? void 0 : _builderContext$value3.themes)
  }, createElement("div", {
    className: "wprf-tab-flex"
  }, createElement("div", {
    className: "wprf-tab-contents"
  }, tabs.map(function (tab, index) {
    var _rest$title, _rest$title2;
    if (!isVisible(builderContext === null || builderContext === void 0 ? void 0 : builderContext.values, tab)) {
      return '';
    }
    var componentClasses = classNames("wprf-tab-content", "wprf-tab-".concat(tab === null || tab === void 0 ? void 0 : tab.id), {
      "wprf-active": active === tab.id
    });
    return createElement("div", {
      id: tab === null || tab === void 0 ? void 0 : tab.id,
      className: componentClasses,
      key: tab === null || tab === void 0 ? void 0 : tab.id
    }, ((tab === null || tab === void 0 ? void 0 : tab.label) && ((_rest$title = rest === null || rest === void 0 ? void 0 : rest.title) !== null && _rest$title !== void 0 ? _rest$title : true) || (rest === null || rest === void 0 ? void 0 : rest.content_heading)) && createElement("div", {
      className: "wprf-tab-heading-wrapper"
    }, (tab === null || tab === void 0 ? void 0 : tab.label) && ((_rest$title2 = rest === null || rest === void 0 ? void 0 : rest.title) !== null && _rest$title2 !== void 0 ? _rest$title2 : true) && createElement("h4", null, tab.label), createElement("div", null, (rest === null || rest === void 0 ? void 0 : rest.content_heading) && Object.keys(rest.content_heading).map(function (button, index) {
      return createElement(React.Fragment, {
        key: "button_".concat(button, "_").concat(index)
      }, createElement(Field, rest.content_heading[button]));
    }))), createElement(InnerContent, {
      context: builderContext,
      fields: tab === null || tab === void 0 ? void 0 : tab.fields,
      parentIndex: [].concat(_toConsumableArray(parentIndex), [index])
    }));
  })), applyFilters('wprf_tab_content', null, rest)), (rest === null || rest === void 0 || (_rest$step = rest.step) === null || _rest$step === void 0 ? void 0 : _rest$step.show) && createElement(SteppedButton, {
    fields: tabsFields,
    active: active,
    setActive: setActive,
    config: (_rest$step2 = rest.step) !== null && _rest$step2 !== void 0 ? _rest$step2 : {
      show: false
    }
  }), ((_submit$show = submit === null || submit === void 0 ? void 0 : submit.show) !== null && _submit$show !== void 0 ? _submit$show : true) && (submit !== null && submit !== void 0 && submit.rules ? when(submit === null || submit === void 0 ? void 0 : submit.rules, {
    rest: rest,
    config: {
      active: active
    }
  }) : true) && createElement(Submit, submit));
};

export { Content as default };
