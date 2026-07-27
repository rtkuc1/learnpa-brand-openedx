import React, { ReactNode, ElementType, FC, ForwardRefExoticComponent, RefAttributes } from 'react';
import { AlertProps as BaseAlertProps } from 'react-bootstrap';
import { type TransitionComponent } from 'react-bootstrap/helpers';
import { IconProps } from '../Icon';
export declare const ALERT_CLOSE_LABEL_TEXT = "Dismiss";
export type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
export type BaseProps = Omit<BaseAlertProps, 'children' | 'variant' | 'closeLabel'>;
export interface AlertProps extends BaseProps {
    /** Specifies class name to append to the base element */
    className?: string;
    /** Overrides underlying component base CSS class name */
    bsPrefix?: string;
    /** Specifies variant to use. */
    variant?: AlertVariant;
    /**
     * Animate the entering and exiting of the Alert. `true` will use the `<Fade>` transition,
     * more detailed customization is also provided.
     */
    transition?: boolean | TransitionComponent;
    children?: ReactNode;
    /** Icon that will be shown in the alert */
    icon?: React.ComponentType<IconProps>;
    /** Whether the alert is shown. */
    show?: boolean;
    /** Whether the alert is dismissible. Defaults to false. */
    dismissible?: boolean;
    /** Optional callback function for when the alert it dismissed. */
    onClose?: () => void;
    /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
    actions?: React.ReactElement[];
    /** Position of the dismiss and call-to-action buttons. Defaults to `false`. */
    stacked?: boolean;
    /** Sets the text for alert close button, defaults to 'Dismiss'. */
    closeLabel?: string | ReactNode;
}
export interface AlertHeadingProps {
    /** Specifies the base element */
    as?: ElementType;
    /** Overrides underlying component base CSS class name */
    bsPrefix?: string;
    children?: ReactNode;
}
export interface AlertLinkProps {
    /** Specifies the base element */
    as?: ElementType;
    /** Overrides underlying component base CSS class name */
    bsPrefix?: string;
    children?: ReactNode;
    href?: string;
}
export interface AlertComponent extends ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>> {
    Heading: FC<AlertHeadingProps>;
    Link: FC<AlertLinkProps>;
}
declare const Alert: AlertComponent;
export default Alert;
