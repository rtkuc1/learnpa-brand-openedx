import React from 'react';
import classNames from 'classnames';
function TableCell({
  getCellProps,
  render,
  column
}) {
  const {
    className,
    ...rest
  } = getCellProps();
  return /*#__PURE__*/React.createElement("td", {
    ...rest,
    className: classNames('pgn__data-table-cell-wrap', className, column.cellClassName)
  }, render('Cell'));
}
export default TableCell;
//# sourceMappingURL=TableCell.js.map