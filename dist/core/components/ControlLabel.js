import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { createElement } from 'react';

var _excluded = ["id", "label", "badge", "badgePosition", "context", "info"];
var ControlLabel = function ControlLabel(props) {
  var _context$icons;
  var id = props.id,
    label = props.label,
    badge = props.badge,
    badgePosition = props.badgePosition,
    context = props.context,
    info = props.info,
    rest = _objectWithoutProperties(props, _excluded);
  if (!(label && label.length > 0)) {
    return null;
  }

  /**
   * Icon need to be fixed
   * context?.icons?.[rest?.icon] through context
   */

  return createElement("div", {
    className: "wprf-control-label"
  }, badgePosition == 'left' && badge, createElement("label", {
    htmlFor: id
  }, label), info && createElement("div", {
    className: "wprf-info"
  }, createElement("button", {
    className: "wprf-info-button"
  }, "Info"), createElement("p", {
    className: "wprf-info-text"
  }, createElement("span", {
    dangerouslySetInnerHTML: {
      __html: info
    }
  }))), (rest === null || rest === void 0 ? void 0 : rest.link) && createElement("a", {
    rel: "nofollow",
    target: "_blank",
    href: rest.link
  }, context === null || context === void 0 || (_context$icons = context.icons) === null || _context$icons === void 0 ? void 0 : _context$icons.link), badgePosition == 'right' && badge);
};

export { ControlLabel as default };
