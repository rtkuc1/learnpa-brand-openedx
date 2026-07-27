import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRadioSetContext } from './FormRadioSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';
const RadioControl = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    getControlProps
  } = useFormGroupContext();
  const {
    getRadioControlProps,
    hasRadioSetProvider
  } = useRadioSetContext();
  let radioProps = getControlProps({
    ...props,
    className: classNames('pgn__form-radio-input', props.className)
  });
  if (hasRadioSetProvider) {
    radioProps = getRadioControlProps(radioProps);
  }
  return /*#__PURE__*/React.createElement("input", {
    ...radioProps,
    type: "radio",
    ref: ref
  });
});
RadioControl.propTypes = {
  className: PropTypes.string
};
RadioControl.defaultProps = {
  className: undefined
};
const FormRadio = /*#__PURE__*/React.forwardRef(({
  children,
  className,
  controlClassName,
  labelClassName,
  description,
  isInvalid,
  isValid,
  ...props
}, ref) => /*#__PURE__*/React.createElement(FormGroupContextProvider, {
  controlId: props.id,
  isInvalid: isInvalid,
  isValid: isValid
}, /*#__PURE__*/React.createElement("div", {
  className: classNames('pgn__form-radio', className, {
    'pgn__form-control-valid': isValid,
    'pgn__form-control-invalid': isInvalid,
    'pgn__form-control-disabled': props.disabled
  })
}, /*#__PURE__*/React.createElement(RadioControl, {
  ref: ref,
  className: controlClassName,
  ...props
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormLabel, {
  className: labelClassName
}, children), description && /*#__PURE__*/React.createElement(FormControlFeedback, {
  hasIcon: false
}, description)))));
FormRadio.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies class name for control component. */
  controlClassName: PropTypes.string,
  /** Specifies class name for label component. */
  labelClassName: PropTypes.string,
  /** Specifies description to show under the radio's value. */
  description: PropTypes.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: PropTypes.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: PropTypes.bool
};
FormRadio.defaultProps = {
  id: undefined,
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
  disabled: false
};
export { RadioControl };
export default FormRadio;
//# sourceMappingURL=FormRadio.js.map