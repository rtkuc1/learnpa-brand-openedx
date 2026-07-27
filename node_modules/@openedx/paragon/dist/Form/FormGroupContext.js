import React, { useState, useEffect, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import { newId } from '../utils';
import { useIdList, omitUndefinedProperties } from './fieldUtils';
const identityFn = props => props;
const noop = () => {};
const FormGroupContext = /*#__PURE__*/React.createContext({
  getControlProps: identityFn,
  useSetIsControlGroupEffect: noop,
  getLabelProps: identityFn,
  getDescriptorProps: identityFn,
  hasFormGroupProvider: false
});
const useFormGroupContext = () => React.useContext(FormGroupContext);
function useStateEffect(initialState) {
  const [state, setState] = useState(initialState);
  const useSetStateEffect = newState => {
    useEffect(() => setState(newState), [newState]);
  };
  return [state, useSetStateEffect];
}
function FormGroupContextProvider({
  children,
  controlId: explicitControlId,
  isInvalid,
  isValid,
  size
}) {
  const controlId = useMemo(() => explicitControlId || newId('form-field'), [explicitControlId]);
  const [describedByIds, registerDescriptorId] = useIdList(controlId);
  const [labelledByIds, registerLabelerId] = useIdList(controlId);
  const [isControlGroup, useSetIsControlGroupEffect] = useStateEffect(false);
  const getControlProps = useCallback(controlProps => {
    // labelledByIds from the list above should only be added to a control
    // if it the control is a group. We prefer adding a condition here because:
    //    - Hooks cannot be called inside conditionals
    //    - The getLabelProps function below is forced to generate an id
    //      whether it is needed or not.
    //    - This is what allows consumers of Paragon to use <Form.Label>
    //      interchangeably between ControlGroup type controls and regular Controls
    const labelledByIdsForControl = isControlGroup ? labelledByIds : undefined;
    return omitUndefinedProperties({
      ...controlProps,
      'aria-describedby': classNames(controlProps['aria-describedby'], describedByIds) || undefined,
      'aria-labelledby': classNames(controlProps['aria-labelledby'], labelledByIdsForControl) || undefined,
      id: controlId
    });
  }, [isControlGroup, describedByIds, labelledByIds, controlId]);
  const getLabelProps = labelProps => {
    const id = registerLabelerId(labelProps?.id);
    if (isControlGroup) {
      return {
        ...labelProps,
        id
      };
    }
    return {
      ...labelProps,
      htmlFor: controlId
    };
  };
  const getDescriptorProps = descriptorProps => {
    const id = registerDescriptorId(descriptorProps?.id);
    return {
      ...descriptorProps,
      id
    };
  };
  const contextValue = {
    getControlProps,
    getLabelProps,
    getDescriptorProps,
    useSetIsControlGroupEffect,
    isControlGroup,
    controlId,
    isInvalid,
    isValid,
    size,
    hasFormGroupProvider: true
  };
  return /*#__PURE__*/React.createElement(FormGroupContext.Provider, {
    value: contextValue
  }, children);
}
export { FormGroupContext, FormGroupContextProvider, useFormGroupContext };
//# sourceMappingURL=FormGroupContext.js.map