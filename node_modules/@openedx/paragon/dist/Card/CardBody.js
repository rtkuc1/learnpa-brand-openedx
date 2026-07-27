import React from 'react';
import classNames from 'classnames';
const CardBody = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  ...rest
}, ref) => /*#__PURE__*/React.createElement("div", {
  className: classNames('pgn__card-body', className),
  ref: ref,
  ...rest
}, children));
export default CardBody;
//# sourceMappingURL=CardBody.js.map