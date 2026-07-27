import React from 'react';
import PropTypes from 'prop-types';
function FormControlDecorator({
  children,
  location
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${location}`
  }, children);
}
FormControlDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.oneOf(['leading', 'trailing'])
};
FormControlDecorator.defaultProps = {
  location: 'leading'
};
export default FormControlDecorator;
//# sourceMappingURL=FormControlDecorator.js.map