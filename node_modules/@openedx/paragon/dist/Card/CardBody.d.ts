import React from 'react';
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Specifies the content of the component. */
    children?: React.ReactNode;
    /** The class to append to the base element. */
    className?: string;
}
declare const CardBody: React.ForwardRefExoticComponent<CardBodyProps & React.RefAttributes<HTMLDivElement>>;
export default CardBody;
