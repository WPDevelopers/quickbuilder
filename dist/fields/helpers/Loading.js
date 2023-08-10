import { __ } from '@wordpress/i18n';
import { createElement } from 'react';

var Loading = function Loading(props) {
  return createElement("p", null, __('Loading...', 'notificationx'));
};

export { Loading as default };
