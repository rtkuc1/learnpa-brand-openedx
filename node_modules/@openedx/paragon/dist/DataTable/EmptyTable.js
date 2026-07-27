import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableContext from './DataTableContext';
function EmptyTable({
  content,
  className,
  ...rest
}) {
  const {
    rows,
    isLoading
  } = useContext(DataTableContext);
  if (isLoading || !rows || rows.length > 0) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-empty', className),
    ...rest
  }, content);
}
EmptyTable.defaultProps = {
  className: null
};
EmptyTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired
};
export default EmptyTable;
//# sourceMappingURL=EmptyTable.js.map