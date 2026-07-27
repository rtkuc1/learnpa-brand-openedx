import React from 'react';
import classNames from 'classnames';
import BaseSpinner from 'react-bootstrap/Spinner';
/** A spinning animation that indicates loading. */
const Spinner = /*#__PURE__*/React.forwardRef(({
  className,
  screenReaderText,
  ...attrs
}, ref) => {
  const spinnerProps = {
    ...attrs,
    className: classNames('pgn__spinner', className),
    role: screenReaderText ? 'status' : undefined
  };
  return /*#__PURE__*/React.createElement(BaseSpinner, {
    ...spinnerProps,
    ref: ref
  }, screenReaderText && /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, screenReaderText));
});
export default Spinner;
//# sourceMappingURL=index.js.map