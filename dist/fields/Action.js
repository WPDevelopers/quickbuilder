import { createElement, Fragment } from 'react';
import { applyFilters } from '@wordpress/hooks';

var Action = function Action(props) {
  return createElement(Fragment, null, applyFilters(props.action, '', props));
};

export { Action as default };
