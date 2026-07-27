import React from 'react';
interface Props {
    /** Specifies the content of the dialog */
    children: React.ReactNode;
    /** The aria-label of the dialog */
    title: string;
    /** A callback to close the modal dialog, e.g. when Escape is pressed */
    onClose: () => void;
    /** Is the modal dialog open or closed? */
    isOpen?: boolean;
    /** The close 'x' icon button in the top right of the dialog box */
    hasCloseButton?: boolean;
    /** Size determines the maximum width of the dialog box */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
    /** The visual style of the dialog box */
    variant?: 'default' | 'warning' | 'danger' | 'success' | 'dark';
    /** The label supplied to the close icon button if one is rendered */
    closeLabel?: string;
    /** Specifies class name to append to the base element */
    className?: string;
    /**
     * Determines where a scrollbar should appear if a modal is too large for the
     * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
     * the browser window itself receives the scrollbar.
     */
    isFullscreenScroll?: boolean;
    /** To show full screen view on mobile screens */
    isFullscreenOnMobile?: boolean;
    /** Prevent clicking on the backdrop or pressing Esc to close the modal */
    isBlocking?: boolean;
    /** Specifies the z-index of the modal */
    zIndex?: number;
    /**
     * Specifies whether overflow content inside the modal should be visible.
     * - `true` - content that exceeds the modal boundaries will remain visible outside the modal's main viewport,
     * rather than being clipped or hidden.
     * - `false` - any overflow content will be clipped to fit within the modal's dimensions.
     */
    isOverflowVisible: boolean;
}
declare function ModalDialog({ children, title, isOpen, onClose, size, variant, hasCloseButton, closeLabel, isFullscreenScroll, className, isFullscreenOnMobile, isBlocking, zIndex, isOverflowVisible, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace ModalDialog {
    var Header: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("./ModalDialogHeader").Props>;
    var Title: any;
    var Footer: any;
    var CloseButton: any;
    var Body: any;
    var Hero: any;
}
export default ModalDialog;
