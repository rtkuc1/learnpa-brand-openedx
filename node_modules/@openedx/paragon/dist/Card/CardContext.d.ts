import React, { ReactNode } from 'react';
interface CardContextData {
    /** Specifies which orientation to use. */
    orientation: 'horizontal' | 'vertical';
    /** Specifies loading state. */
    isLoading: boolean;
    /** Specifies `Card` style variant */
    variant: 'light' | 'dark' | 'muted';
}
declare const CardContext: React.Context<CardContextData>;
interface CardContextProviderProps extends Partial<CardContextData> {
    /** Specifies content of the component. */
    children?: ReactNode;
}
declare function CardContextProvider({ orientation, children, isLoading, variant, }: CardContextProviderProps): import("react/jsx-runtime").JSX.Element;
export { CardContextProvider };
export default CardContext;
