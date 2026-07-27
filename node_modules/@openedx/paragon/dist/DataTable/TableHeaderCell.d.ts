import React from 'react';
interface SortIndicatorProps {
    /** Indicates whether or not a column is sorted */
    isSorted: boolean;
    /** Indicates whether the column is sorted in descending order */
    isSortedDesc: boolean;
}
export declare function SortIndicator({ isSorted, isSortedDesc }: SortIndicatorProps): import("react/jsx-runtime").JSX.Element;
interface TableHeaderCellProps {
    /** Returns props for the th element */
    getHeaderProps: (...args: any[]) => Record<string, any>;
    /** Indicates whether or not a column is sorted */
    isSorted?: boolean;
    /** Renders the header content. Passed the string 'Header' */
    render: (type: 'Header') => React.ReactNode;
    /** Indicates whether the column is sorted in descending order */
    isSortedDesc?: boolean;
    /** Gets props related to sorting that will be passed to th */
    getSortByToggleProps?: (...args: any[]) => Record<string, any>;
    /** Indicates whether a column is sortable */
    canSort?: boolean;
    /** Class(es) to be applied to header cells */
    headerClassName?: string;
}
declare function TableHeaderCell({ getHeaderProps, render, canSort, getSortByToggleProps, isSorted, isSortedDesc, headerClassName, }: TableHeaderCellProps): import("react/jsx-runtime").JSX.Element;
export default TableHeaderCell;
