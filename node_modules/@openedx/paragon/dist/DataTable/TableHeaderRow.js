import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from './TableHeaderCell';
function TableHeaderRow({
  headerGroups
}) {
  return /*#__PURE__*/React.createElement("thead", null, headerGroups.map(headerGroup => /*#__PURE__*/React.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map(column => /*#__PURE__*/React.createElement(TableHeaderCell, {
    ...column,
    ...column.getHeaderProps()
  })))));
}
TableHeaderRow.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape({
      /** Props for the TableHeaderCell component. Must include a key */
      getHeaderProps: PropTypes.func.isRequired
    })).isRequired,
    /** Returns props for the header tr element */
    getHeaderGroupProps: PropTypes.func.isRequired
  })).isRequired
};
export default TableHeaderRow;
//# sourceMappingURL=TableHeaderRow.js.map