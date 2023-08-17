import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState, useEffect, createElement } from 'react';
import { Icon } from '@wordpress/components';
import { GenericField } from '../Field.js';
import { useInstanceId } from '@wordpress/compose';
import useBuilderContext from '../../core/hooks/useBuilderContext.js';

var RepeaterField = function RepeaterField(props) {
  var _builderContext$value;
  var builderContext = useBuilderContext();
  var fields = props.fields,
    _onChange = props.onChange,
    index = props.index,
    parent = props.parent;
  var _useState = useState(props.isCollapsed),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var instanceId = useInstanceId(RepeaterField);
  // onClick={() => setIsCollapse(!isCollapse)}
  var values = (_builderContext$value = builderContext.values) === null || _builderContext$value === void 0 || (_builderContext$value = _builderContext$value[parent]) === null || _builderContext$value === void 0 ? void 0 : _builderContext$value[index];
  var title = (values === null || values === void 0 ? void 0 : values.title) || (values === null || values === void 0 ? void 0 : values.post_title) || (values === null || values === void 0 ? void 0 : values.username) || (values === null || values === void 0 ? void 0 : values.plugin_theme_name);
  var _title = title ? title.length < 40 ? title : title.substr(0, 40) + "..." : '';
  var onClone = function onClone(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    props.clone(props.index);
  };
  var onDelete = function onDelete(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    props.remove(props.index);
  };
  useEffect(function () {
    builderContext.setFieldValue([parent, index, 'isCollapsed'], isCollapsed);
  }, [isCollapsed]);
  return createElement("div", {
    className: "wprf-repeater-field"
  }, createElement("div", {
    className: "wprf-repeater-field-title",
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    }
  }, createElement("h4", null, createElement(Icon, {
    icon: "move"
  }), props.index + 1, ": ", _title), createElement("div", {
    className: "wprf-repeater-field-controls"
  }, createElement(Icon, {
    onClick: onClone,
    icon: "admin-page"
  }), createElement(Icon, {
    onClick: onDelete,
    icon: "trash"
  }))), !isCollapsed && createElement("div", {
    className: "wprf-repeater-inner-field"
  }, fields.map(function (field, fieldIndex) {
    return createElement(GenericField, _extends({
      key: "field-".concat(index, "-").concat(fieldIndex)
    }, field, {
      id: "field-".concat(instanceId, "-").concat(index, "-").concat(fieldIndex),
      index: index,
      parenttype: "repeater",
      parent: parent,
      onChange: function onChange(event) {
        return _onChange(event, index);
      }
    }));
  })));
};

export { RepeaterField as default };
