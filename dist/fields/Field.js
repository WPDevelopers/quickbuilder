import { createElement, Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import '../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import '@wordpress/date';
import 'moment';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import withProps from '../core/hooks/withProps.js';
import Action from './Action.js';
import Tab from './Tab.js';

// import Section from "./Section";
// import DefaultInput from "./Input";
// import Group from "./Group";

var Field = function Field(props) {
  if (!props.type || props.type.length === 0) {
    console.error(props);
    throw new Error(__("Field must have a #type. see documentation.", "notificationx"));
  }
  switch (props.type) {
    case "action":
      return createElement(Action, props);
    case "tab":
      return createElement(Tab, props);
    // case "section":
    // 	return <Section {...props} />;
    // // case "group":
    // // 	return <Group {...props} />;
    // case "input":
    // case "number":
    // case "text":
    // 	return <DefaultInput {...props} />;
    default:
      var customField = applyFilters("custom_field", "", props.type, props);
      if (!customField) {
        console.error('No custom field found for type: ', props.type, props);
      }
      return createElement(Fragment, null, customField);
  }
};
var GenericField = withProps(Field, true);
var Field$1 = withProps(Field);

export { GenericField, Field$1 as default };
