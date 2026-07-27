import React, { forwardRef } from 'react';
import classNames from 'classnames';
const Stack = /*#__PURE__*/forwardRef(({
  direction = 'vertical',
  gap = 0,
  reversed = false,
  children,
  className,
  ...rest
}, ref) => /*#__PURE__*/React.createElement("div", {
  ref: ref,
  className: classNames(direction === 'horizontal' ? 'pgn__hstack' : 'pgn__vstack', gap ? `pgn__stack-gap--${gap}` : '', reversed ? 'pgn__stack-reversed' : '', className),
  ...rest
}, children));
export default Stack;
//# sourceMappingURL=index.js.map