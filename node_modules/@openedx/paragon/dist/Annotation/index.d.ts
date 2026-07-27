import React from 'react';
interface AnnotationProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Specifies contents of the component. */
    children: React.ReactNode;
    /** Specifies class name to append to the base element. */
    className?: string;
    /** Specifies variant to use. */
    variant?: 'error' | 'success' | 'warning' | 'light' | 'dark';
    /** Specifies arrow position. */
    arrowPlacement?: 'top' | 'right' | 'bottom' | 'left';
}
declare const Annotation: React.ForwardRefExoticComponent<AnnotationProps & React.RefAttributes<HTMLSpanElement>>;
export default Annotation;
