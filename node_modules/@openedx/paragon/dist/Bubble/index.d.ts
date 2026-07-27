import React from 'react';
export type BubbleVariant = 'primary' | 'success' | 'error' | 'warning';
export interface BubbleProps {
    /** Specifies contents of the component. */
    children: React.ReactNode;
    /** The `Bubble` style variant to use. */
    variant?: BubbleVariant;
    /** Activates disabled variant. */
    disabled?: boolean;
    /** Optional class name(s) to append to the base element. */
    className?: string;
    /** Specifies whether to add padding to the `Bubble` or not. */
    expandable?: boolean;
}
declare const Bubble: React.ForwardRefExoticComponent<BubbleProps & React.RefAttributes<HTMLDivElement>>;
export default Bubble;
