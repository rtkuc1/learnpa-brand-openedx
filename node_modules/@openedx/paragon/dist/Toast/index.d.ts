import React from 'react';
export declare const TOAST_CLOSE_LABEL_TEXT = "Close";
export declare const TOAST_DELAY = 5000;
interface ToastAction {
    label: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
interface ToastProps {
    /** A string or an element that is rendered inside the main body of the `Toast`. */
    children: string;
    /**
     * A function that is called on close. It can be used to perform
     * actions upon closing of the `Toast`, such as setting the "show"
     * element to false.
     * */
    onClose: () => void;
    /** Boolean used to control whether the `Toast` shows. */
    show: boolean;
    /**
     * Fields used to build optional action button.
     * `label` is a string rendered inside the button.
     * `href` is a link that will render the action button as an anchor tag.
     * `onClick` is a function that is called when the button is clicked.
     * The full type definition can be seen [here](https://github.com/openedx/paragon/blob/release-23.x/src/Toast/index.tsx#L16)
     */
    action?: ToastAction;
    /**
     * Alt text for the `Toast`'s dismiss button. Defaults to 'Close'.
     */
    closeLabel?: string;
    /** Time in milliseconds for which the `Toast` will display. */
    delay?: number;
    /** Class names for the `BaseToast` component. */
    className?: string;
}
declare function Toast({ action, children, className, closeLabel, onClose, show, delay, ...rest }: ToastProps): import("react/jsx-runtime").JSX.Element;
export default Toast;
