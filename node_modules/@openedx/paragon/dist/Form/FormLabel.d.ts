import React from 'react';
interface Props {
    /** Specifies contents of the component. */
    children: React.ReactNode;
    /** Specifies whether the component should be displayed with inline styling. */
    isInline?: boolean;
    /** Specifies an additional `className` to add to the base element. */
    className?: string;
}
declare function FormLabel({ children, isInline, ...props }: Props & React.ComponentPropsWithoutRef<'label'>): React.ReactElement<Omit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref">, string | React.JSXElementConstructor<any>>;
export default FormLabel;
