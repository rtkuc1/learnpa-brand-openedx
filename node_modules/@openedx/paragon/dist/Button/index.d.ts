import React from 'react';
import { type ButtonProps as BaseButtonProps } from 'react-bootstrap/Button';
import { type ButtonGroupProps as BaseButtonGroupProps } from 'react-bootstrap/ButtonGroup';
import { type ButtonToolbarProps as BaseButtonToolbarProps } from 'react-bootstrap/ButtonToolbar';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';
type BaseVariant = ('primary' | 'secondary' | 'tertiary' | 'brand' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link');
/**
 * This was added so these types could be added as a non-breaking change.
 * @deprecated - remove in Paragon 24
 */
type OtherDeprecatedValue = string & {};
export interface ButtonProps extends Omit<BaseButtonProps, 'size'> {
    /** Set a custom element for this component (default: `button`, with `type="button"`). */
    as?: React.ElementType;
    size?: 'sm' | 'md' | 'lg' | 'inline';
    /**
     * An icon component to render. Example:
     * ```
     * import { Close } from '@openedx/paragon/icons';
     * <Button iconBefore={Close}>Close</Button>
     * ```
     */
    iconBefore?: React.ComponentType;
    /**
     * An icon component to render. Example:
     * ```
     * import { Close } from '@openedx/paragon/icons';
     * <Button iconAfter={Close}>Close</Button>
     * ```
     */
    iconAfter?: React.ComponentType;
    /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
    disabled?: boolean;
    /** Optional: Specify additional class name(s) to apply to the button */
    className?: string;
    /** Specifies the text that is displayed within the button. */
    children: React.ReactNode;
    /** Specifies variant to use.
     * Can be one of the base variants: `primary`, `secondary`, `tertiary`, `brand`, `success`, `danger`, `warning`,
     * `info`, `dark`, `light`, `link`,
     * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
     * or `inverse-outline-`)
     * */
    variant?: BaseVariant | `inverse-${BaseVariant}` | `outline-${BaseVariant}` | `inverse-outline-${BaseVariant}` | OtherDeprecatedValue;
}
declare const Button: ComponentWithAsProp<'button', ButtonProps>;
interface ButtonGroupProps extends Omit<BaseButtonGroupProps, 'size'> {
    /** Specifies element type for this component. */
    as?: React.ElementType;
    /** An ARIA role describing the button group (default: `group`). */
    role?: React.AriaRole;
    /** Specifies the size for all Buttons in the group (default: `md`). */
    size?: 'sm' | 'md' | 'lg' | 'inline';
    /** Display as a button toggle group (default: `false`). */
    toggle?: boolean;
    /** Specifies if the set of Buttons should appear vertically stacked (default: `false`). */
    vertical?: boolean;
    /** Overrides underlying component base CSS class name (default: `btn-group`). */
    bsPrefix?: string;
}
declare const ButtonGroup: ComponentWithAsProp<'div', ButtonGroupProps>;
interface ButtonToolbarProps extends BaseButtonToolbarProps {
    /** An ARIA role describing the button group (default: `toolbar`). */
    role?: React.AriaRole;
    /** Overrides underlying component base CSS class name (default: `btn-toolbar`) */
    bsPrefix?: string;
}
declare const ButtonToolbar: ComponentWithAsProp<'div', ButtonToolbarProps>;
export default Button;
export { ButtonGroup, ButtonToolbar };
