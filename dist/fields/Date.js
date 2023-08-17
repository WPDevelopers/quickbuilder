import { Dropdown, Button, DateTimePicker } from '@wordpress/components';
import { createElement, useEffect } from 'react';
import { getSettings, date } from '@wordpress/date';
import moment from 'moment';
import { addFilter } from '@wordpress/hooks';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import '@wordpress/i18n';
import '../core/hooks/useBuilderContext.js';
import '@babel/runtime/helpers/slicedToArray';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/extends';
import 'classnames';

var getTime = function getTime(value) {
  var _settings$timezone;
  var keepLocalTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var settings = getSettings();
  var _value = moment.utc(value ? value : undefined).utcOffset(+(settings === null || settings === void 0 || (_settings$timezone = settings.timezone) === null || _settings$timezone === void 0 ? void 0 : _settings$timezone.offset), keepLocalTime);
  return _value;
};
var _DateControl = function _DateControl(props) {
  var _props$format;
  var name = props.name,
    value = props.value,
    _onChange = props.onChange,
    position = props.position;
  var settings = getSettings();
  var format = (_props$format = props === null || props === void 0 ? void 0 : props.format) !== null && _props$format !== void 0 ? _props$format : settings.formats.datetime;
  var _value = getTime(value);
  var is12HourTime = /a(?!\\)/i.test(settings.formats.datetime.toLowerCase().replace(/\\\\/g, "").split("").reverse().join(""));
  useEffect(function () {
    // if (!value) {
    _onChange({
      target: {
        type: 'date',
        name: name,
        value: _value
      }
    });
    //     // helpers.setValue(name, date('c', value))
    // }
  }, []);
  return createElement(Dropdown, {
    className: "wprf-control-datetime",
    contentClassName: "wprf-control-datetime-content",
    position: position ? position : "bottom right",
    renderToggle: function renderToggle(_ref) {
      _ref.isOpen;
        var onToggle = _ref.onToggle;
      return createElement(Button, {
        isTertiary: true,
        onClick: onToggle
      }, date(format, _value, -new Date().getTimezoneOffset()));
    },
    renderContent: function renderContent() {
      // console.log(getTime(value), getTime(value).toDate());

      return createElement(DateTimePicker
      // @ts-ignore
      , {
        __nextRemoveHelpButton: true,
        __nextRemoveResetButton: true,
        currentDate: getTime(_value).toDate().toString(),
        onChange: function onChange(date) {
          _onChange({
            target: {
              type: 'date',
              name: name,
              value: moment(date).utc().format()
            }
          });
        },
        is12Hour: is12HourTime
      });
    }
  });
};
var DateControl = withLabel(_DateControl);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('date' === type) {
    return createElement(DateControl, props);
  }
  return field;
});
addFilter('builder_date_format', 'wprf', function (valueState, validProps) {
  // console.log(valueState, validProps);
  return valueState == undefined ? getTime() : valueState;
});

export { DateControl as default };
