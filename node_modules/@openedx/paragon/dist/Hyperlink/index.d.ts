import React, { ElementType, ReactNode } from 'react';
import { type BsPrefixRefForwardingComponent as ComponentWithAsProp, type BsPrefixProps } from 'react-bootstrap/esm/helpers';
export interface HyperlinkProps extends BsPrefixProps, Omit<React.ComponentPropsWithRef<'a'>, 'href' | 'target'> {
    /** specifies the component element type to render for the hyperlink. */
    as?: ElementType;
    /** specifies the URL; required if `as` prop is a standard anchor tag */
    destination?: string;
    /** Content of the hyperlink */
    children: ReactNode;
    /** Custom class names for the hyperlink */
    className?: string;
    /** Alt text for the icon indicating that this link opens in a new tab, if target="_blank". e.g. _("in a new tab") */
    externalLinkAlternativeText?: string;
    /** Tooltip text for the "opens in new tab" icon, if target="_blank". e.g. _("Opens in a new tab"). */
    externalLinkTitle?: string;
    /** type of hyperlink */
    variant?: 'default' | 'muted' | 'brand';
    /** Display the link with an underline. By default, it is only underlined on hover. */
    isInline?: boolean;
    /** specify if we need to show launch Icon. By default, it will be visible. */
    showLaunchIcon?: boolean;
    /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be
     * loaded into the same browsing context as the current one.
     * If the target is `_blank` (opening a new window) `rel='noopener'` will be added to the anchor tag to prevent
     * any potential [reverse tabnabbing attack](https://www.owasp.org/index.php/Reverse_Tabnabbing).
     */
    target?: '_blank' | '_self';
}
export type HyperlinkType = ComponentWithAsProp<'a', HyperlinkProps>;
declare const Hyperlink: React.ForwardRefExoticComponent<Omit<HyperlinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default Hyperlink;
