import _extends from '@babel/runtime/helpers/extends';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { createElement, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { addFilter } from '@wordpress/hooks';
import { isArray, executeChange, sortingFields } from '../core/utils.js';
import '@babel/runtime/helpers/typeof';
import 'intersect';
import { __ } from '@wordpress/i18n';
import useBuilderContext from '../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/defineProperty';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import { GenericField } from './Field.js';

var _excluded = ["name", "fields"];
var _Group = function _Group(props) {
  var fieldName = props.name,
    fields = props.fields,
    rest = _objectWithoutProperties(props, _excluded);
  if (!fields || !isArray(fields) || fields.length === 0) {
    throw new Error(__('You should give a #fields arguments to a group field.', 'notificationx'));
  }
  var builderContext = useBuilderContext();
  var handleChange = useCallback(function (event) {
    if (event.persist) {
      event.persist();
    }
    var _executeChange = executeChange(event),
      field = _executeChange.field,
      value = _executeChange.val;
    var _fieldName = [fieldName, field];
    if (props.parent) {
      _fieldName.unshift(props.parent);
    }
    builderContext.setFieldValue(_fieldName, value);
  }, [props.value]);
  var newFields = sortingFields(fields);
  useEffect(function () {
    builderContext.setFormField([].concat(_toConsumableArray(props.parentIndex), ['fields']), newFields);
  }, []);
  var allFields = newFields.map(function (item, index) {
    var parentIndex = [].concat(_toConsumableArray(props.parentIndex), ['fields', index]);
    var parent = [fieldName];
    if (props.parent) {
      parent.unshift(props.parent);
    }
    return createElement(GenericField, _extends({}, rest, {
      key: item.name,
      index: props.index,
      onChange: handleChange
    }, item, {
      parenttype: "group",
      parent: parent,
      parentIndex: parentIndex
    }));
  });
  var innerClasses = classNames('wprf-group-control-inner', {
    'wprf-display-inline': (props === null || props === void 0 ? void 0 : props.display) === 'inline'
  });
  return createElement("div", {
    className: "wprf-group-control"
  }, createElement("div", {
    className: innerClasses
  }, allFields));
};
var Group = withLabel(_Group);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('group' === type) {
    return createElement(Group, props);
  }
  return field;
});

export { Group as default };
