import { ReactNode, TdHTMLAttributes } from 'react';
interface TableCellProps {
    /** Props for the td element */
    getCellProps: () => TdHTMLAttributes<HTMLTableCellElement>;
    /** Function that renders the cell contents. Will be called with the string 'Cell' */
    render: (type: 'Cell') => ReactNode;
    /** Table column */
    column: {
        /** Class(es) to be applied to the cells in the given column */
        cellClassName?: string;
    };
}
declare function TableCell({ getCellProps, render, column }: TableCellProps): import("react/jsx-runtime").JSX.Element;
export default TableCell;
