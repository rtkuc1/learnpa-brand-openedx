import React from 'react';
import { FORM_CONTROL_SIZES } from './constants';
interface FormGroupContextData {
    getControlProps: (props: Record<string, any>) => Record<string, any>;
    getLabelProps: (props: React.ComponentPropsWithoutRef<'label'>) => React.ComponentPropsWithoutRef<'label'>;
    getDescriptorProps: (props: Record<string, any>) => Record<string, any>;
    useSetIsControlGroupEffect: (isControlGroup: boolean) => void;
    isControlGroup?: boolean;
    controlId?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: string;
    hasFormGroupProvider?: boolean;
}
declare const FormGroupContext: React.Context<FormGroupContextData>;
declare const useFormGroupContext: () => FormGroupContextData;
declare function FormGroupContextProvider({ children, controlId: explicitControlId, isInvalid, isValid, size, }: {
    children: React.ReactNode;
    controlId?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: typeof FORM_CONTROL_SIZES.SMALL | typeof FORM_CONTROL_SIZES.LARGE;
}): import("react/jsx-runtime").JSX.Element;
export { FormGroupContext, FormGroupContextProvider, useFormGroupContext, };
