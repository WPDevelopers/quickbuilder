import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState, useEffect, createElement } from 'react';
import Menu from './tabs/Menu.js';
import Content from './tabs/Content.js';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
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
import '@wordpress/hooks';
import '@babel/runtime/helpers/objectWithoutProperties';
import classNames from 'classnames';

var Tab = function Tab(props) {
  // const builderContextState = useBuilder(props);

  var builderContext = useBuilderContext();
  var _useState = useState((props === null || props === void 0 ? void 0 : props.value) || (props === null || props === void 0 ? void 0 : props.active)),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var componentClasses = classNames("wp-react-form wprf-tabs-wrapper", props === null || props === void 0 ? void 0 : props.className, {
    "wprf-tab-menu-as-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
  });
  useEffect(function () {
    var _props$value;
    var _activeTab = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : props.active;
    if (_activeTab != activeTab) {
      setActiveTab(_activeTab);
    }
  }, [props === null || props === void 0 ? void 0 : props.value]);
  useEffect(function () {
    if (props.value !== activeTab) {
      props.onChange({
        target: {
          type: 'tab',
          name: props.name,
          value: activeTab
        }
      });
    }
  }, [activeTab]);
  return createElement("div", {
    className: componentClasses
  }, createElement(Menu, _extends({}, props, {
    active: activeTab,
    setActive: function setActive(tabId) {
      return setActiveTab(tabId);
    },
    fields: props.fields,
    context: builderContext
  })), createElement(Content, _extends({}, props, {
    fields: props.fields,
    active: activeTab,
    setActive: function setActive(tabId) {
      return setActiveTab(tabId);
    },
    submit: props === null || props === void 0 ? void 0 : props.submit
  })));
};

export { Tab as default };
