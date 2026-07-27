import React from 'react';
interface BreadcrumbProps {
    /** An array of objects describing links to be rendered. The contents of an object depend on the value of `linkAs`
     * prop as these objects will get passed down as props to the underlying component defined by `linkAs` prop.
     */
    links: Array<{
        label: string;
        [key: string]: any;
    }>;
    /** allows to add a label that is not a link to the end of the breadcrumb. */
    activeLabel?: string;
    /** label of the element */
    ariaLabel?: string;
    /** allows to add a custom element between the breadcrumb items.
     * Defaults to `>` rendered using the `Icon` component. */
    spacer?: React.ReactElement;
    /** allows to add a custom function to be called `onClick` of a breadcrumb link.
     * The use case for this is for adding custom analytics to the component. */
    clickHandler?: (event: React.MouseEvent<HTMLAnchorElement>, link: any) => void;
    /** The `Breadcrumbs` style variant to use. */
    variant?: 'light' | 'dark';
    /** The `Breadcrumbs` mobile variant view. */
    isMobile?: boolean;
    /** Specifies the base element to use when rendering links, you should generally use either plain 'a' or
     * [react-router's Link](https://reactrouter.com/en/main/components/link).
     */
    linkAs?: React.ElementType;
    /** Optional class name(s) to append to the base `<nav>` element. */
    className?: string;
}
declare function Breadcrumb({ links, activeLabel, spacer, clickHandler, className, variant, isMobile, ariaLabel, linkAs, }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element;
export default Breadcrumb;
