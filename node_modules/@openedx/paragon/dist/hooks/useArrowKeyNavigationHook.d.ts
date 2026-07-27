/// <reference types="react" />
export interface ArrowKeyNavProps {
    /** e.g. 'a,button,input' */
    selectors?: string;
    ignoredKeys?: string[];
}
/**
 * A React hook to enable arrow key navigation on a component.
 */
export default function useArrowKeyNavigation(props?: ArrowKeyNavProps): import("react").MutableRefObject<HTMLElement | undefined>;
