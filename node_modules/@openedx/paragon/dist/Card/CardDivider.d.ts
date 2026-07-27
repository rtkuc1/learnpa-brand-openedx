import React from 'react';
interface CardDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Specifies class name to append to the base element. */
    className?: string;
}
declare const CardDivider: React.ForwardRefExoticComponent<CardDividerProps & React.RefAttributes<HTMLDivElement>>;
export default CardDivider;
