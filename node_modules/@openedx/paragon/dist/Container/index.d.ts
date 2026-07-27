import { ReactNode, ElementType } from 'react';
import { type ContainerProps as RBContainerProps } from 'react-bootstrap/Container';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';
declare enum ContainerSizeClass {
    xs = "container-mw-xs",
    sm = "container-mw-sm",
    md = "container-mw-md",
    lg = "container-mw-lg",
    xl = "container-mw-xl"
}
export type ContainerSize = keyof typeof ContainerSizeClass;
interface ContainerProps extends RBContainerProps {
    /** Override the base element */
    as?: ElementType;
    /** Specifies the contents of the container */
    children: ReactNode;
    /** Fill all available space at any breakpoint */
    fluid?: boolean;
    /** Overrides underlying component base CSS class name */
    bsPrefix?: string;
    /** Set the maximum width for the container. Omiting the prop will remove the max-width */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
type ContainerType = ComponentWithAsProp<'div', ContainerProps>;
declare const Container: ContainerType;
export default Container;
