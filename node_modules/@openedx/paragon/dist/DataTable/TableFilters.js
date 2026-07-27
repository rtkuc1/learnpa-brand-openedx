import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
export const TABLE_FILTERS_BUTTON_TEXT = 'Filter';
function TableFilters({
  columns,
  manualFilters,
  onFilter,
  currentFilters
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Filters"), columns.map(column => /*#__PURE__*/React.createElement("div", {
    key: column.Header
  }, column.canFilter ? column.render('Filter') : null)), manualFilters && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: () => onFilter(currentFilters)
  }, TABLE_FILTERS_BUTTON_TEXT));
}
TableFilters.defaultProps = {
  manualFilters: false,
  onFilter: () => {}
};
TableFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    canFilter: PropTypes.bool,
    render: PropTypes.func.isRequired
  })).isRequired,
  manualFilters: PropTypes.bool,
  onFilter: PropTypes.func,
  currentFilters: PropTypes.arrayOf(PropTypes.shape()).isRequired
};
export default TableFilters;
//# sourceMappingURL=TableFilters.js.map