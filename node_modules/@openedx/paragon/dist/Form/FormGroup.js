import React from 'react';
import classNames from 'classnames';
import { FormGroupContextProvider } from './FormGroupContext';
function FormGroup({
  children,
  controlId,
  isInvalid = false,
  isValid = false,
  size,
  as,
  ...props
}) {
  return /*#__PURE__*/React.createElement(as ?? 'div', {
    ...props,
    className: classNames('pgn__form-group', props.className)
  }, /*#__PURE__*/React.createElement(FormGroupContextProvider, {
    controlId: controlId,
    isInvalid: isInvalid,
    isValid: isValid,
    size: size
  }, children));
}
export default FormGroup;
//# sourceMappingURL=FormGroup.js.map