import { createElement } from 'react';
import classNames from 'classnames';

var Image = function Image(props) {
  if (!(props !== null && props !== void 0 && props.src)) {
    return createElement("p", null, "No Source( src ) Defined");
  }
  var componentClasses = classNames(["wprf-input-image", props === null || props === void 0 ? void 0 : props.className]);
  return createElement("img", {
    className: componentClasses,
    src: props === null || props === void 0 ? void 0 : props.src,
    alt: props === null || props === void 0 ? void 0 : props.alt
  });
};

export { Image as default };
