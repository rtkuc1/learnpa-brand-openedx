import React from 'react';
interface ContextData {
    onClose: () => void;
    isOpen: boolean;
    isBlocking: boolean;
}
declare const ModalContext: React.Context<ContextData>;
declare function ModalContextProvider({ onClose, isOpen, isBlocking, children, }: {
    onClose: () => void;
    isOpen: boolean;
    isBlocking?: boolean;
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export { ModalContextProvider };
export default ModalContext;
