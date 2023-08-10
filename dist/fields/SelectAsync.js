import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import parse from 'html-react-parser';
import { createElement, useState, useEffect, Fragment } from 'react';
import AsyncSelect from 'react-select/async';
import { addFilter } from '@wordpress/hooks';
import when from '../core/when.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/typeof';
import 'sweetalert2';
import '@wordpress/data';
import { wpFetch } from '../core/utils.js';
import { __ } from '@wordpress/i18n';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/extends';
import 'classnames';

var _SelectAsync = function _SelectAsync(props) {
  var builderContext = useBuilderContext();
  var id = props.id,
    name = props.name,
    multiple = props.multiple,
    placeholder = props.placeholder,
    onChange = props.onChange;
    props.parentIndex;
  var _useState = useState(builderContext.eligibleOptions(props.options)),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState(props === null || props === void 0 ? void 0 : props.value),
    _useState4 = _slicedToArray(_useState3, 2),
    sOption = _useState4[0],
    setSOption = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAjaxRunning = _useState6[0],
    setIsAjaxRunning = _useState6[1];
  // const [lastRequest, setLastRequest] = useState("");

  var handleMenuOpen = function handleMenuOpen(inputValue, callback) {
    // AJAX
    if (props.ajax && (!props.ajax.rules || when(props.ajax.rules, builderContext.values))) {
      var _Object$keys;
      if (!inputValue) {
        callback(options);
        return;
      }
      if (inputValue.length < 3) {
        callback([{
          'label': __("Please input a minimum of 3 characters."),
          'value': null,
          'disabled': true
        }]);
        return;
      }
      var data = {
        inputValue: inputValue
      };
      (_Object$keys = Object.keys(props.ajax.data)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (singleData) {
        if (props.ajax.data[singleData].indexOf("@") > -1) {
          var _builderContext$value;
          var eligibleKey = props.ajax.data[singleData].substr(1);
          data[singleData] = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[eligibleKey];
        } else {
          data[singleData] = props.ajax.data[singleData];
        }
      });
      if (!isAjaxRunning && inputValue) {
        setIsAjaxRunning(true);
        // @ts-ignore
        window.lastRequest = null;
        return wpFetch({
          path: props.ajax.api,
          data: data
        }).then(function (response) {
          callback(response);
          return response;
        })["finally"](function () {
          setIsAjaxRunning(false);
          // @ts-ignore
          if (window.lastRequest) {
            // @ts-ignore
            var lr = window.lastRequest;
            // @ts-ignore
            window.lastRequest = null;
            // console.log("recursive call: ", lr, callback);

            // @ts-ignore
            handleMenuOpen.apply(void 0, _toConsumableArray(lr));
          }

          // @ts-ignore
          window.lastCompleteRequest = inputValue;
        });
      } else {
        // @ts-ignore
        window.lastRequest = [inputValue, callback];
      }
    }
  };
  useEffect(function () {
    setOptions(builderContext.eligibleOptions(props.options));
  }, [builderContext.values.source]);
  useEffect(function () {
    onChange({
      target: {
        type: "select",
        name: name,
        value: sOption,
        multiple: multiple
      }
    });
  }, [sOption]);
  return createElement("div", {
    className: "wprf-async-select-wrapper"
  }, createElement(AsyncSelect, {
    cacheOptions: true,
    loadOptions: handleMenuOpen,
    defaultOptions: options,
    isDisabled: props === null || props === void 0 ? void 0 : props.disable,
    isMulti: multiple !== null && multiple !== void 0 ? multiple : false,
    classNamePrefix: "wprf-async-select"
    // defaultMenuIsOpen={true}
    ,
    id: id,
    name: name,
    placeholder: placeholder,
    formatOptionLabel: function formatOptionLabel(option, meta) {
      var _meta$inputValue;
      if (meta !== null && meta !== void 0 && (_meta$inputValue = meta.inputValue) !== null && _meta$inputValue !== void 0 && _meta$inputValue.length && option.name) {
        var _meta$inputValue2;
        if (option.name.toLowerCase().includes(meta === null || meta === void 0 || (_meta$inputValue2 = meta.inputValue) === null || _meta$inputValue2 === void 0 ? void 0 : _meta$inputValue2.toLowerCase())) {
          var _option$name, _option$address;
          option === null || option === void 0 ? void 0 : option.name;
          var regX = new RegExp("(".concat(meta === null || meta === void 0 ? void 0 : meta.inputValue, ")"), "gi");
          var _name = (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.replace(regX, "<strong style={font-weight: 900}>$1</strong>");
          var address = (_option$address = option.address) === null || _option$address === void 0 ? void 0 : _option$address.replace(regX, "<strong style={font-weight: 900}>$1</strong>");
          return createElement(Fragment, null, parse(_name || ""), " ", createElement("small", null, parse(address || "")));
        }
      }
      return createElement(Fragment, null, option.name ? createElement(Fragment, null, createElement("b", null, option.name), " ") : createElement(Fragment, null, option.label, " "), option.address && createElement("small", null, option.address));
    },
    value: sOption,
    isClearable: true,
    isOptionDisabled: function isOptionDisabled(option) {
      return option === null || option === void 0 ? void 0 : option.disabled;
    },
    onChange: function onChange(option) {
      return setSOption(option);
    } // option or options
  }));
};

var SelectAsync = withLabel(_SelectAsync);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('select-async' === type) {
    return createElement(SelectAsync, props);
  }
  return field;
});

export { SelectAsync as default };
