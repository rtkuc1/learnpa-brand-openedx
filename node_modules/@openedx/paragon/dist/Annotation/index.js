import React from 'react';
import classNames from 'classnames';
const Annotation = /*#__PURE__*/React.forwardRef(({
  className,
  variant = 'success',
  children,
  arrowPlacement = 'bottom',
  ...props
}, ref) => /*#__PURE__*/React.createElement("span", {
  className: classNames(className, 'pgn__annotation', `pgn__annotation-${variant}-${arrowPlacement}`),
  ref: ref,
  ...props
}, children));
export default Annotation;
//# sourceMappingURL=index.js.map