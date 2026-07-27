import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
import FilterStatus from './FilterStatus';
function SidebarFilters({
  title
}) {
  const {
    state,
    columns
  } = useContext(DataTableContext);
  const availableFilters = useMemo(() => columns.filter(column => column.canFilter), [columns]);
  const filtersApplied = state?.filters && state.filters.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-side-filters"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pgn__data-table-side-filters-title"
  }, title || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.SidebarFilters.title",
    defaultMessage: "Filters",
    description: "Title for the sidebar filters component"
  })), /*#__PURE__*/React.createElement("hr", null), availableFilters.map(column => /*#__PURE__*/React.createElement("div", {
    key: column.Header,
    className: "pgn__data-table-side-filters-item"
  }, column.render('Filter'))), filtersApplied && /*#__PURE__*/React.createElement(FilterStatus, {
    className: "pgn__data-table-side-filters-status",
    showFilteredFields: false,
    variant: "tertiary"
  }));
}
SidebarFilters.propTypes = {
  /** Specifies the title to show near the filters, default to 'Filters'. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
SidebarFilters.defaultProps = {
  title: undefined
};
export default SidebarFilters;
//# sourceMappingURL=SidebarFilters.js.map