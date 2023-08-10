import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { createElement, Fragment } from 'react';
import classNames from 'classnames';
import { validFieldProps } from '../utils.js';
import Badge from '../components/Badge.js';
import ControlLabel from '../components/ControlLabel.js';
import ControlField from '../components/ControlField.js';

var _excluded = ["label", "id", "name", "type", "style", "is_pro", "badge"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// import { useInstanceId } from "@wordpress/compose";

var withLabel = function withLabel(WrappedComponent) {
  var WithLabel = function WithLabel(props) {
    var _styles$label, _styles$label$positio, _styles$label2, _classNames, _styles$description2;
    var label = props.label,
      id = props.id,
      name = props.name,
      type = props.type,
      prevStyle = props.style,
      is_pro = props.is_pro,
      badge = props.badge,
      rest = _objectWithoutProperties(props, _excluded);
    // const instanceId = useInstanceId(withLabel);

    if (id == undefined) {
      id = name;
    }
    var styles = _objectSpread({
      description: {
        position: "right"
      }
    }, prevStyle);
    var styleClasses = classNames((_classNames = {}, _defineProperty(_classNames, "wprf-style-".concat(styles === null || styles === void 0 ? void 0 : styles.type), (styles === null || styles === void 0 ? void 0 : styles.type) || false), _defineProperty(_classNames, "wprf-label-none", label === undefined || label === "" || label.length === 0), _defineProperty(_classNames, "wprf-".concat((styles === null || styles === void 0 || (_styles$label = styles.label) === null || _styles$label === void 0 ? void 0 : _styles$label.position) || "inline", "-label"), ((_styles$label$positio = styles === null || styles === void 0 || (_styles$label2 = styles.label) === null || _styles$label2 === void 0 ? void 0 : _styles$label2.position) !== null && _styles$label$positio !== void 0 ? _styles$label$positio : true) && label != undefined), _classNames));
    if (type === "hidden") {
      return createElement(WrappedComponent, _extends({}, props, {
        id: id
      }));
    }
    var validProps = validFieldProps(props, ["description", "label", "help", "style"]);
    var componentClasses = classNames("wprf-control-wrapper", "wprf-type-".concat(type), styleClasses, props === null || props === void 0 ? void 0 : props.classes, _defineProperty({}, "wprf-name-".concat(name), name));
    return createElement("div", {
      className: componentClasses
    }, is_pro == true && createElement(Fragment, null, createElement(Badge, _extends({}, badge, rest, {
      renderLabel: function renderLabel(badge, position) {
        return createElement(ControlLabel, _extends({}, validProps, {
          context: rest === null || rest === void 0 ? void 0 : rest.context,
          id: id,
          label: label,
          badge: badge,
          badgePosition: position
        }));
      },
      renderComponent: function renderComponent() {
        var _styles$description;
        return createElement(ControlField, {
          help: null,
          description: props === null || props === void 0 ? void 0 : props.description,
          position: styles === null || styles === void 0 || (_styles$description = styles.description) === null || _styles$description === void 0 ? void 0 : _styles$description.position,
          renderComponent: function renderComponent() {
            return createElement(WrappedComponent, _extends({}, validProps, {
              disable: true,
              id: id
            }));
          }
        });
      }
    })), (props === null || props === void 0 ? void 0 : props.help) && createElement("div", {
      className: "wprf-badge-wrapper"
    }, createElement("div", {
      className: "wprf-control-label"
    }), createElement("div", {
      className: "wprf-control-field"
    }, createElement("p", {
      className: "wprf-help",
      dangerouslySetInnerHTML: {
        __html: props.help
      }
    })))), (is_pro == false || is_pro == undefined) && createElement(Fragment, null, label && label.length > 0 && createElement(ControlLabel, _extends({}, validProps, {
      context: rest === null || rest === void 0 ? void 0 : rest.context,
      label: label,
      id: id
    })), createElement(ControlField, {
      help: props === null || props === void 0 ? void 0 : props.help,
      description: props === null || props === void 0 ? void 0 : props.description,
      position: styles === null || styles === void 0 || (_styles$description2 = styles.description) === null || _styles$description2 === void 0 ? void 0 : _styles$description2.position,
      renderComponent: function renderComponent() {
        return createElement(WrappedComponent, _extends({}, validProps, {
          id: id
        }));
      }
    })));
  };
  return WithLabel;
};

export { withLabel as default };
