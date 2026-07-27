import React from 'react';
declare function ModalBackdrop({ onClick }: {
    onClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
declare function ModalContentContainer({ children }: {
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
interface Props {
    /** Specifies the contents of the modal */
    children: React.ReactNode;
    /** A callback function for when the modal is dismissed */
    onClose: () => void;
    /** Is the modal dialog open or closed */
    isOpen: boolean;
    /** Prevent clicking on the backdrop or pressing Esc to close the modal */
    isBlocking?: boolean;
    /** Specifies the z-index of the modal */
    zIndex?: number;
}
/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */
declare function ModalLayer({ children, onClose, isOpen, isBlocking, zIndex, }: Props): import("react/jsx-runtime").JSX.Element | null;
export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
