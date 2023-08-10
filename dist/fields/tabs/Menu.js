import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState, useEffect, createElement } from 'react';
import classNames from 'classnames';
import { isVisible, isString, isObject } from '../../core/utils.js';
import { __ } from '@wordpress/i18n';

var Menu = function Menu(props) {
  var _context$values, _context$values2;
  if (props.fields === undefined) {
    throw new Error(__("There are no tabs defined!", 'notificationx'));
  }
  var active = props.active,
    setActive = props.setActive,
    tabs = props.fields,
    context = props.context;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tabsFields = _useState2[0],
    setTabsFields = _useState2[1];
  useEffect(function () {
    var filteredTabs = tabs.filter(function (tab) {
      return isVisible(context === null || context === void 0 ? void 0 : context.values, tab);
    });
    setTabsFields(filteredTabs);
  }, [tabs, context === null || context === void 0 || (_context$values = context.values) === null || _context$values === void 0 ? void 0 : _context$values.source]);
  var componentClasses = classNames("wprf-tab-menu-wrapper", props === null || props === void 0 ? void 0 : props.className, {
    "wprf-tab-menu-sidebar": props === null || props === void 0 ? void 0 : props.sidebar
  }, context === null || context === void 0 || (_context$values2 = context.values) === null || _context$values2 === void 0 ? void 0 : _context$values2.source);
  var currentTabIndex = tabsFields.findIndex(function (tab) {
    return tab.id === active;
  });
  return createElement("div", {
    className: componentClasses
  }, createElement("ul", {
    className: "wprf-tab-nav"
  }, tabsFields.map(function (tab, index) {
    var _classNames, _context$icons, _tab$icon, _tab$icon2;
    return createElement("li", {
      className: classNames("wprf-tab-nav-item", (_classNames = {}, _defineProperty(_classNames, "".concat(tab.classes), tab.classes), _defineProperty(_classNames, "wprf-active-nav", active === tab.id), _defineProperty(_classNames, "wprf-tab-complete", props !== null && props !== void 0 && props.completionTrack ? index <= currentTabIndex : false), _classNames)),
      "data-key": tab.id,
      key: tab.id,
      onClick: function onClick() {
        var _props$clickable;
        return ((_props$clickable = props === null || props === void 0 ? void 0 : props.clickable) !== null && _props$clickable !== void 0 ? _props$clickable : true) && setActive(tab.id);
      }
    }, (tab === null || tab === void 0 ? void 0 : tab.icon) && (isString(tab.icon) && !isObject(tab.icon) ? createElement("img", {
      src: tab.icon,
      alt: tab === null || tab === void 0 ? void 0 : tab.label
    }) : isObject(tab.icon) ? context === null || context === void 0 || (_context$icons = context.icons) === null || _context$icons === void 0 || (_context$icons = _context$icons[tab === null || tab === void 0 || (_tab$icon = tab.icon) === null || _tab$icon === void 0 ? void 0 : _tab$icon.type]) === null || _context$icons === void 0 ? void 0 : _context$icons[tab === null || tab === void 0 || (_tab$icon2 = tab.icon) === null || _tab$icon2 === void 0 ? void 0 : _tab$icon2.name] : ''), createElement("span", null, tab.label));
  })));
};

export { Menu as default };
