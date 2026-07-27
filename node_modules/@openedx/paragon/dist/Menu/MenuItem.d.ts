import React, { type ReactElement, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';
interface MenuItemProps<As extends ElementType> {
    /** Specifies that this `MenuItem` is selected inside the `SelectMenu` */
    defaultSelected?: boolean;
    /** Specifies class name to append to the base element */
    className?: string;
    /** Specifies the content of the `MenuItem` */
    children: ReactNode;
    /** Specifies the base element */
    as?: As;
    /** Specifies the jsx before the content of the `MenuItem` */
    iconBefore?: ReactElement | ElementType;
    /** Specifies the jsx after the content of the `MenuItem` */
    iconAfter?: ReactElement | ElementType;
}
declare function MenuItem<As extends ElementType = 'button'>({ as, children, defaultSelected, iconAfter, iconBefore, ...props }: MenuItemProps<As> & ComponentPropsWithoutRef<As>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default MenuItem;
