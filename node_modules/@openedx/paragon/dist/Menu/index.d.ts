import React, { type ElementType, type ReactNode, type ComponentPropsWithoutRef } from 'react';
interface MenuProps<As extends ElementType> {
    /** Specifies class name to append to the base element */
    className?: string;
    /**
     * Specifies the CSS selector string that indicates to which elements
     * the user can navigate using the arrow keys
     */
    arrowKeyNavigationSelector?: string;
    /** Specifies the base element */
    as?: As;
    /** Specifies the content of the menu */
    children?: ReactNode;
}
declare function Menu<As extends ElementType = 'div'>({ as, arrowKeyNavigationSelector, children, ...props }: MenuProps<As> & ComponentPropsWithoutRef<As>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default Menu;
