import React from 'react';
interface StackProps {
    /** Specifies the content of the `Stack`. */
    children: React.ReactNode;
    /** Specifies direction of the children blocks (column/row). */
    direction?: 'horizontal' | 'vertical';
    /**
     * Specifies inner space between children blocks.
     *
     * Valid values are based on `the spacing classes`:
     * `0, 0.5, ... 6`.
     */
    gap?: number;
    /** Specifies the order of the children. */
    reversed?: boolean;
    /** Specifies an additional `className` to add to the base element. */
    className?: string;
}
declare const Stack: React.ForwardRefExoticComponent<Omit<StackProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Stack;
