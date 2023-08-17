import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useEffect, useCallback } from 'react';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
import RepeaterField from './helpers/RepeaterField.js';
import 'classnames';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectWithoutProperties';
import { executeChange } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import '@wordpress/i18n';
import 'sweetalert2';
import '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import './Input.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@wordpress/components';
import { ReactSortable } from 'react-sortablejs';
import { v4 } from 'uuid';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Repeater = function Repeater(props) {
  var _builderContext$value, _builderContext$value4;
  var fieldName = props.name;
    props.value;
    var button = props.button,
    fields = props.fields;
  var builderContext = useBuilderContext();
  var _useState = useState((_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[fieldName]),
    _useState2 = _slicedToArray(_useState, 2),
    localMemoizedValue = _useState2[0],
    setLocalMemoizedValue = _useState2[1];

  // const localMemoizedValue = useMemo(() => {
  //     let localS = builderContext.values?.[fieldName];
  //     return localS;
  // }, [builderContext.values?.[fieldName], refresh])

  useEffect(function () {
    var _builderContext$value2;
    if (((_builderContext$value2 = builderContext.values) === null || _builderContext$value2 === void 0 ? void 0 : _builderContext$value2[fieldName]) != undefined) {
      var _builderContext$value3;
      setLocalMemoizedValue((_builderContext$value3 = builderContext.values) === null || _builderContext$value3 === void 0 ? void 0 : _builderContext$value3[fieldName]);
    }
  }, [(_builderContext$value4 = builderContext.values) === null || _builderContext$value4 === void 0 ? void 0 : _builderContext$value4[fieldName]]);
  var handleSort = function handleSort(value) {
    builderContext.setFieldValue(fieldName, value);
  };
  var handleChange = function handleChange(event, index) {
    if (event.persist) {
      event.persist();
    }
    var _executeChange = executeChange(event),
      field = _executeChange.field,
      value = _executeChange.val;
    builderContext.setFieldValue([fieldName, index, field], value);
  };
  var handleRemove = useCallback(function (index) {
    var lValue = _toConsumableArray(localMemoizedValue);
    lValue.splice(index, 1);
    builderContext.setFieldValue(fieldName, lValue);
  }, [localMemoizedValue]);
  var handleClone = useCallback(function (index) {
    var lValue = _toConsumableArray(localMemoizedValue);
    if (lValue.length > 0) {
      var _indexedCopy, _indexedCopy2, _indexedCopy3, _indexedCopy4;
      var indexedCopy = (lValue === null || lValue === void 0 ? void 0 : lValue[index]) || {};
      if ((_indexedCopy = indexedCopy) !== null && _indexedCopy !== void 0 && _indexedCopy.title) {
        indexedCopy = _objectSpread(_objectSpread({}, indexedCopy), {}, {
          title: indexedCopy.title + ' - Copy'
        });
      }
      if ((_indexedCopy2 = indexedCopy) !== null && _indexedCopy2 !== void 0 && _indexedCopy2.post_title) {
        indexedCopy = _objectSpread(_objectSpread({}, indexedCopy), {}, {
          post_title: indexedCopy.post_title + ' - Copy'
        });
      }
      if ((_indexedCopy3 = indexedCopy) !== null && _indexedCopy3 !== void 0 && _indexedCopy3.username) {
        indexedCopy = _objectSpread(_objectSpread({}, indexedCopy), {}, {
          username: indexedCopy.username + ' - Copy'
        });
      }
      if ((_indexedCopy4 = indexedCopy) !== null && _indexedCopy4 !== void 0 && _indexedCopy4.plugin_theme_name) {
        indexedCopy = _objectSpread(_objectSpread({}, indexedCopy), {}, {
          plugin_theme_name: indexedCopy.plugin_theme_name + ' - Copy'
        });
      }
      indexedCopy = _objectSpread(_objectSpread({}, indexedCopy), {}, {
        index: v4(),
        isCollapsed: false
      });
      builderContext.setFieldValue([fieldName, localMemoizedValue.length], indexedCopy);
    }
  }, [localMemoizedValue]);
  useEffect(function () {
    if (localMemoizedValue == undefined || localMemoizedValue == '') {
      setLocalMemoizedValue([{
        index: v4()
      }]);
    } else {
      setLocalMemoizedValue(function (items) {
        return items.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            index: v4()
          });
        });
      });
    }
  }, []);
  return createElement("div", {
    className: "wprf-repeater-control"
  }, localMemoizedValue && (localMemoizedValue === null || localMemoizedValue === void 0 ? void 0 : localMemoizedValue.length) > 0 && createElement(ReactSortable, {
    className: "wprf-repeater-content",
    list: localMemoizedValue,
    setList: handleSort,
    handle: '.wprf-repeater-field-title',
    filter: '.wprf-repeater-field-controls',
    forceFallback: true
  }, localMemoizedValue.map(function (value, index) {
    return createElement(RepeaterField, {
      isCollapsed: value === null || value === void 0 ? void 0 : value.isCollapsed,
      key: (value === null || value === void 0 ? void 0 : value.index) || index,
      fields: fields,
      index: index,
      parent: fieldName,
      clone: handleClone,
      remove: handleRemove,
      onChange: function onChange(event) {
        return handleChange(event, index);
      }
    });
  })), createElement("div", {
    className: "wprf-repeater-label"
  }, createElement("button", {
    className: "wprf-repeater-button",
    onClick: function onClick() {
      return builderContext.setFieldValue(fieldName, [].concat(_toConsumableArray(localMemoizedValue), [{
        index: v4()
      }]));
    }
  }, button === null || button === void 0 ? void 0 : button.label)));
};
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('repeater' === type) {
    return createElement(Repeater, props);
  }
  return field;
});

export { Repeater as default };
