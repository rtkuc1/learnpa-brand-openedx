import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';
import RowStatusDefault from './RowStatus';
import TablePagination from './TablePagination';
import TablePaginationMinimal from './TablePaginationMinimal';
function TableFooter({
  className,
  children
}) {
  const {
    RowStatusComponent
  } = useContext(DataTableContext);
  const RowStatus = RowStatusComponent || RowStatusDefault;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, 'pgn__data-table-footer'),
    "data-testid": "table-footer"
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RowStatus, null), /*#__PURE__*/React.createElement(TablePagination, null), /*#__PURE__*/React.createElement(TablePaginationMinimal, null)));
}
TableFooter.propTypes = {
  /** Specifies the content of the `TableFooter` */
  children: PropTypes.node,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string
};
TableFooter.defaultProps = {
  children: null,
  className: undefined
};
export default TableFooter;
//# sourceMappingURL=TableFooter.js.map