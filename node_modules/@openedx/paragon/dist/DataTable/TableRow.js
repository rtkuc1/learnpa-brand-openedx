import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell from './TableCell';
import DataTableContext from './DataTableContext';
function TableRow({
  row
}) {
  const {
    getRowProps,
    cells,
    id,
    isSelected,
    isExpanded
  } = row;
  const {
    renderRowSubComponent,
    visibleColumns
  } = useContext(DataTableContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
    ...getRowProps({
      className: classNames({
        'pgn__data-table-row': true,
        'is-selected': isSelected
      })
    })
  }, cells.map(cell => /*#__PURE__*/React.createElement(TableCell, {
    ...cell,
    key: `${cell.column.Header}${id}`
  }))), isExpanded && renderRowSubComponent ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: visibleColumns.length
  }, renderRowSubComponent({
    row
  }))) : null);
}
TableRow.propTypes = {
  /** Row data that is received from `react-table` API. */
  row: PropTypes.shape({
    /** props to include on the tr tag (must include id) */
    getRowProps: PropTypes.func.isRequired,
    /** cells in the row */
    cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    /** row id */
    id: PropTypes.string.isRequired,
    /** indicates if row has been selected */
    isSelected: PropTypes.bool,
    /** Indicates if row has been expanded. */
    isExpanded: PropTypes.bool
  }).isRequired
};
export default TableRow;
//# sourceMappingURL=TableRow.js.map