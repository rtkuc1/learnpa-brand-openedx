import React from 'react';
import classNames from 'classnames';
const Bubble = /*#__PURE__*/React.forwardRef(({
  variant = 'primary',
  className,
  children = null,
  disabled = false,
  expandable = false,
  ...props
}, ref) => /*#__PURE__*/React.createElement("div", {
  ref: ref,
  className: classNames('pgn__bubble', `pgn__bubble-${variant}`, className, {
    disabled,
    expandable
  }),
  ...props
}, children));
export default Bubble;
//# sourceMappingURL=index.js.map