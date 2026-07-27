import { ReactNode } from 'react';
interface CardGridProps {
    /** The class name for the CardGrid component */
    className?: string;
    /** The Card components to organize into a responsive grid */
    children: ReactNode;
    /**
     * An object containing the desired column size at each breakpoint, following a similar
     * props API as ``react-bootstrap/Col``
     */
    columnSizes?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    /** Whether to disable the default equal height cards across rows in the card grid */
    hasEqualColumnHeights?: boolean;
}
declare function CardGrid({ className, children, columnSizes, hasEqualColumnHeights, }: CardGridProps): import("react/jsx-runtime").JSX.Element;
export default CardGrid;
