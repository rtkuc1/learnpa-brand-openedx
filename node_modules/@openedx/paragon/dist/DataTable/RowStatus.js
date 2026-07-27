import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
function RowStatus({
  className,
  statusText
}) {
  const {
    page,
    rows,
    itemCount,
    state
  } = useContext(DataTableContext);
  const rowCount = page?.length || rows?.length;
  const pageSize = state?.pageSize || 0;
  const pageIndex = state?.pageIndex || 0;
  const firstRow = pageSize * pageIndex + 1;
  const lastRow = firstRow + rowCount - 1;
  if (!rowCount) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    "data-testid": "row-status"
  }, statusText || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.RowStatus.statusText",
    defaultMessage: "Showing {firstRow} - {lastRow} of {itemCount}.",
    description: "A text describing how many rows is shown in the table",
    values: {
      itemCount,
      firstRow,
      lastRow
    }
  }));
}
RowStatus.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** A text describing how many rows is shown in the table. */
  statusText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
RowStatus.defaultProps = {
  className: undefined,
  statusText: undefined
};
export default RowStatus;
//# sourceMappingURL=RowStatus.js.map