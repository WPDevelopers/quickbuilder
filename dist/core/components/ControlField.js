import { createElement } from 'react';

var ControlField = function ControlField(_ref) {
  var position = _ref.position,
    description = _ref.description,
    renderComponent = _ref.renderComponent,
    help = _ref.help;
  return createElement("div", {
    className: "wprf-control-field"
  }, position === 'left' && description && createElement("p", {
    className: "wprf-description",
    dangerouslySetInnerHTML: {
      __html: description
    }
  }), renderComponent(), position === 'right' && description && createElement("p", {
    className: "wprf-description",
    dangerouslySetInnerHTML: {
      __html: description
    }
  }), help && createElement("p", {
    className: "wprf-help",
    dangerouslySetInnerHTML: {
      __html: help
    }
  }));
};

export { ControlField as default };
