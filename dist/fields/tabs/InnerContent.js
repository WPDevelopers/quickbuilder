import _extends from '@babel/runtime/helpers/extends';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useEffect, createElement, Fragment } from 'react';
import { sortingFields, isArray } from '../../core/utils.js';
import Field, { GenericField } from '../Field.js';

var InnerContent = function InnerContent(_ref) {
  var fields = _ref.fields,
    parentIndex = _ref.parentIndex,
    context = _ref.context;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    _fields = _useState2[0],
    setFields = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    fieldViews = _useState4[0],
    setFieldViews = _useState4[1];
  // Fields Sorting
  useEffect(function () {
    var newFields = sortingFields(fields);
    context.setFormField([parentIndex, 'fields'], newFields);
    setFields(newFields);
  }, []);
  useEffect(function () {
    if (isArray(_fields) && _fields.length > 0) {
      var allFields = _fields.map(function (item, index) {
        var pIndex = [].concat(_toConsumableArray(parentIndex), ['fields', index]);
        if ((item === null || item === void 0 ? void 0 : item.type) === 'section') {
          return createElement(GenericField, _extends({
            key: "input-".concat(item.name, "-").concat(Math.random())
          }, item, {
            parentIndex: pIndex
          }));
        } else if (item) {
          return createElement(Field, _extends({
            key: "input-".concat(item.name, "-").concat(Math.random())
          }, item, {
            parentIndex: pIndex
          }));
        }
        return createElement(React.Fragment, {
          key: Math.random()
        });
      });
      setFieldViews(allFields);
    }
  }, [_fields]);
  return createElement(Fragment, null, fieldViews);
};

export { InnerContent as default };
