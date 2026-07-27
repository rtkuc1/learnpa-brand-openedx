/**
 * This hook will find the index of the last child of a containing element
 * that fits within its bounding rectangle. This is done by summing the widths
 * of the children until they exceed the width of the container.
 *
 * The hook returns the index of the last visible child.
 *
 * @param containerElementRef - container element
 * @param overflowElementRef - overflow element
 */
declare const useIndexOfLastVisibleChild: (containerElementRef: HTMLElement | null, overflowElementRef: HTMLElement | null) => number;
export default useIndexOfLastVisibleChild;
