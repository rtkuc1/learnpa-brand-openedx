import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';
function FormControlFloatingLabel({
  children
}) {
  const {
    controlId
  } = useFormGroupContext();
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /*#__PURE__*/React.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: controlId
  }, children)));
}
FormControlFloatingLabel.propTypes = {
  children: PropTypes.node.isRequired
};
export default FormControlFloatingLabel;
//# sourceMappingURL=FormControlFloatingLabel.js.map