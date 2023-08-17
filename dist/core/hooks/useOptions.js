import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState, useEffect } from 'react';
import { isArray, sortingFields } from '../utils.js';
import useBuilderContext from './useBuilderContext.js';

var useOptions = function useOptions(props) {
  var propertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fields';
  if (!(props !== null && props !== void 0 && props[propertyName])) {
    throw new Error('#options param need to set in order to use useOptions hook.');
  }
  var savedValue = props.value,
    multiple = props.multiple;
  var builderContext = useBuilderContext();
  var _useState = useState(props[propertyName]),
    _useState2 = _slicedToArray(_useState, 2),
    fieldOptions = _useState2[0],
    setFieldOptions = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    lOptions = _useState4[0],
    setOptions = _useState4[1];
  var _useState5 = useState({
      options: null,
      parentIndex: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    isData = _useState6[0],
    setData = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOption = _useState8[0],
    setSelectedOption = _useState8[1];
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    option = _useState10[0],
    setOption = _useState10[1];
  useEffect(function () {
    var _builderContext$getTa;
    var newFieldsOptions = props.ajax ? ((_builderContext$getTa = builderContext.getTabFields(props === null || props === void 0 ? void 0 : props.parentIndex)) === null || _builderContext$getTa === void 0 ? void 0 : _builderContext$getTa[propertyName]) || fieldOptions : fieldOptions;
    // console.log(props.name, newFieldsOptions);
    // console.log(props.name, 'old', fieldOptions);
    /**
     * old Options is => fieldOptions, L28, 29, 30 ( remove )
     * if there is any issue with other fields, then it should be for AJAX on Select only.
     */
    setOptions(builderContext.eligibleOptions(newFieldsOptions));
    setSelectedOption(builderContext.eligibleOption(newFieldsOptions, savedValue, multiple !== null && multiple !== void 0 ? multiple : false));
  }, [savedValue, fieldOptions]);
  useEffect(function () {
    setFieldOptions(props[propertyName]);
    setOptions(builderContext.eligibleOptions(props[propertyName]));
  }, [props]);
  useEffect(function () {
    setOptions(builderContext.eligibleOptions(fieldOptions));
  }, [fieldOptions]);
  useEffect(function () {
    if (isData.options != null) {
      // builderContext.setFormField(isData.parentIndex, [...props[propertyName], ...isData.options])
      // setOptions(builderContext.eligibleOptions(isData.options));
      setFieldOptions(isData.options);
    }
  }, [isData]);
  useEffect(function () {
    if (selectedOption != null) {
      var opt;
      if (!multiple) {
        opt = selectedOption.value || savedValue;
      } else {
        opt = isArray(selectedOption) && selectedOption.map(function (o) {
          return o.value;
        }) || savedValue;
      }
      setOption(opt);
    }
  }, [selectedOption]);
  useEffect(function () {
    if (lOptions.filter(function (opt) {
      return opt.value === option;
    }).length === 0) {
      var _options$;
      var _options = sortingFields(lOptions);
      setOption((_options === null || _options === void 0 || (_options$ = _options[0]) === null || _options$ === void 0 ? void 0 : _options$.value) || savedValue);
    }
  }, [option, lOptions]);
  var options = sortingFields(lOptions);
  return {
    options: options,
    option: option,
    selectedOption: selectedOption,
    setOptions: setOptions,
    setData: setData
  };
};

export { useOptions as default };
