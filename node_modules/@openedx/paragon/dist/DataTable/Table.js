import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../Spinner';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import { useRows } from './hooks';
import DataTableContext from './DataTableContext';
function Table({
  isStriped
}) {
  const {
    getTableProps,
    prepareRow,
    displayRows,
    headerGroups,
    getTableBodyProps
  } = useRows();
  const {
    isLoading
  } = useContext(DataTableContext);
  const renderRows = () => displayRows.map(row => {
    prepareRow(row);
    return /*#__PURE__*/React.createElement(TableRow, {
      row: row,
      key: row.id
    });
  });
  if (!getTableProps) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-container', {
      'is-loading': isLoading
    }),
    "data-testid": "data-table-container"
  }, isLoading && /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-spinner",
    "data-testid": "data-table-spinner"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    screenReaderText: "loading"
  })), /*#__PURE__*/React.createElement("table", {
    ...getTableProps({
      className: classNames({
        'pgn__data-table': true,
        'is-striped': isStriped
      })
    })
  }, /*#__PURE__*/React.createElement(TableHeaderRow, {
    headerGroups: headerGroups
  }), /*#__PURE__*/React.createElement("tbody", {
    ...getTableBodyProps()
  }, renderRows())));
}
Table.defaultProps = {
  isStriped: true
};
Table.propTypes = {
  /** should table rows be striped */
  isStriped: PropTypes.bool
};
export default Table;
//# sourceMappingURL=Table.js.map