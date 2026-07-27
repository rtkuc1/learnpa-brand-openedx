import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';
import { FormCheckboxSetContextProvider } from './FormCheckboxSetContext';
import FormControlSet from './FormControlSet';
function FormCheckboxSet({
  children,
  name,
  value,
  defaultValue,
  isInline,
  onChange,
  onFocus,
  onBlur,
  ...props
}) {
  const {
    getControlProps,
    useSetIsControlGroupEffect
  } = useFormGroupContext();
  useSetIsControlGroupEffect(true);
  const controlProps = getControlProps(props);
  return /*#__PURE__*/React.createElement(FormCheckboxSetContextProvider, {
    name: name,
    value: value,
    defaultValue: defaultValue,
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange
  }, /*#__PURE__*/React.createElement(FormControlSet, {
    role: "group",
    isInline: isInline,
    ...controlProps
  }, children));
}
FormCheckboxSet.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies name for the component. */
  name: PropTypes.string.isRequired,
  /** Specifies values for the checkboxes. */
  value: PropTypes.arrayOf(PropTypes.string),
  /** Specifies default values for the checkboxes. */
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  /** Specifies whether to display components with inline styling. */
  isInline: PropTypes.bool,
  /** Specifies onChange event handler. */
  onChange: PropTypes.func,
  /** Specifies onFocus event handler. */
  onFocus: PropTypes.func,
  /** Specifies onBlur event handler. */
  onBlur: PropTypes.func
};
FormCheckboxSet.defaultProps = {
  className: undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined
};
export default FormCheckboxSet;
//# sourceMappingURL=FormCheckboxSet.js.map