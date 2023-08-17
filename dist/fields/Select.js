import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useEffect, useCallback } from 'react';
import ReactSelect from 'react-select';
import { addFilter } from '@wordpress/hooks';
import { isArray, isObject, valueExists, wpFetch, merge } from '../core/utils.js';
import when from '../core/when.js';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
import useOptions from '../core/hooks/useOptions.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/typeof';
import 'sweetalert2';
import '@wordpress/data';
import '@wordpress/i18n';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/extends';
import 'classnames';

var _Select = function _Select(props) {
  var builderContext = useBuilderContext();
  var id = props.id,
    name = props.name,
    multiple = props.multiple,
    placeholder = props.placeholder,
    _props$search = props.search,
    search = _props$search === void 0 ? false : _props$search,
    onChange = props.onChange,
    parentIndex = props.parentIndex;
  var _useOptions = useOptions(props, 'options'),
    options = _useOptions.options,
    selectedOption = _useOptions.selectedOption,
    setData = _useOptions.setData;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    sOption = _useState2[0],
    setSOption = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAjaxComplete = _useState6[0];
    _useState6[1];
  var handleMenuOpen = function handleMenuOpen() {
    // AJAX
    if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
      setIsLoading(true);
      var data = {};
      Object.keys(props === null || props === void 0 ? void 0 : props.ajax.data).map(function (singleData) {
        if ((props === null || props === void 0 ? void 0 : props.ajax.data[singleData].indexOf('@')) > -1) {
          var _builderContext$value;
          var eligibleKey = props === null || props === void 0 ? void 0 : props.ajax.data[singleData].substr(1);
          data[singleData] = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[eligibleKey];
        } else {
          data[singleData] = props === null || props === void 0 ? void 0 : props.ajax.data[singleData];
        }
      });
      if (!isAjaxComplete) {
        return wpFetch({
          path: props === null || props === void 0 ? void 0 : props.ajax.api,
          data: data
        }).then(function (response) {
          setIsLoading(false);
          var arrayMerge = merge(props.options, response, 'value');
          builderContext.setFormField([].concat(_toConsumableArray(parentIndex), ['options']), arrayMerge);
          setData({
            options: arrayMerge,
            parentIndex: [].concat(_toConsumableArray(parentIndex), ['options'])
          });
          // setIsAjaxComplete(true);
          return response;
        });
      }
    }
  };
  var handleMenuClose = function handleMenuClose() {
    setIsLoading(false);
  };
  useEffect(function () {
    if (!isArray(sOption) && isObject(sOption)) {
      onChange({
        target: {
          type: 'select',
          name: name,
          value: sOption.value,
          options: options,
          multiple: multiple
        }
      });
    }
    if (isArray(sOption)) {
      onChange({
        target: {
          type: 'select',
          name: name,
          value: sOption.map(function (item) {
            return item.value;
          }),
          options: options,
          multiple: multiple
        }
      });
    }
  }, [sOption]);
  useEffect(function () {
    handleMenuOpen();
  }, []);
  useEffect(function () {
    if (props !== null && props !== void 0 && props.menuOpen) {
      handleMenuOpen();
    }
  }, [props === null || props === void 0 ? void 0 : props.menuOpen]);
  var handleOptionChange = useCallback(function (option) {
    var _props$filterValue;
    if (isArray(option) && (props === null || props === void 0 || (_props$filterValue = props.filterValue) === null || _props$filterValue === void 0 ? void 0 : _props$filterValue.length) > 0) {
      var _props$filterValue2;
      var origialValues = option;
      var values = origialValues;
      var filterValue = (_props$filterValue2 = props === null || props === void 0 ? void 0 : props.filterValue) !== null && _props$filterValue2 !== void 0 ? _props$filterValue2 : ['all'];
      if (!isArray(filterValue)) {
        filterValue = [filterValue];
      }
      if ((origialValues === null || origialValues === void 0 ? void 0 : origialValues.length) > 1 && valueExists(origialValues.map(function (item) {
        return item.value;
      }), filterValue)) {
        values = origialValues.filter(function (item) {
          return !filterValue.includes(item === null || item === void 0 ? void 0 : item.value);
        });
      }
      option = values;
    }
    setSOption(option);
  }, [name, id, parentIndex]);
  return createElement("div", {
    className: "wprf-select-wrapper"
  }, createElement(ReactSelect, {
    isDisabled: props === null || props === void 0 ? void 0 : props.disable,
    classNamePrefix: "wprf-select",
    isSearchable: search !== null && search !== void 0 ? search : false,
    id: id,
    name: name,
    isMulti: multiple !== null && multiple !== void 0 ? multiple : false,
    placeholder: placeholder,
    isLoading: isLoading,
    options: options,
    value: selectedOption,
    onMenuOpen: handleMenuOpen,
    onMenuClose: handleMenuClose,
    isOptionDisabled: function isOptionDisabled(option) {
      return option === null || option === void 0 ? void 0 : option.disabled;
    },
    onChange: handleOptionChange // option or options
  }));
};

var Select = withLabel(_Select);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('select' === type) {
    return createElement(Select, props);
  }
  return field;
});

export { Select as default };
