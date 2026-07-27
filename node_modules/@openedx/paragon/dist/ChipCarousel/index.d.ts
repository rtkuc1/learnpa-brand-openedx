import React from 'react';
export interface OverflowScrollContextProps {
    setOverflowRef: () => void;
    isScrolledToStart: boolean;
    isScrolledToEnd: boolean;
    scrollToPrevious: () => void;
    scrollToNext: () => void;
}
export interface ChipCarouselProps {
    /** Specifies class name for the ChipCarousel. */
    className?: string;
    /** Specifies array of `Chip` elements to be rendered inside the carousel. */
    items: Array<React.ReactElement>;
    /** Text describing the ChipCarousel for screen readers. */
    ariaLabel: string;
    /** Whether the default opacity masks should be shown at the start/end, if applicable. */
    disableOpacityMasks?: boolean;
    /** Callback function for when the user scrolls to the previous element. */
    onScrollPrevious?: () => void;
    /** Callback function for when the user scrolls to the next element. */
    onScrollNext?: () => void;
    /** Whether users can scroll within the overflow container. */
    canScrollHorizontal?: boolean;
    /** A value specifying the distance the scroll should move. */
    offset?: number | string;
    /** Type of offset value (percentage or fixed). */
    offsetType?: 'percentage' | 'fixed';
    /**
     * Specifies inner space between children blocks.
     *
     * Valid values are based on `the spacing classes`:
     * `0, 0.5, ... 6`.
     */
    gap?: number;
}
declare const ChipCarousel: React.ForwardRefExoticComponent<ChipCarouselProps & React.RefAttributes<HTMLDivElement>>;
export default ChipCarousel;
