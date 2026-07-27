import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarFilters from './SidebarFilters';
import DataTableContext from './DataTableContext';
function DataTableLayout({
  filtersTitle,
  className,
  children
}) {
  const {
    setFilter,
    showFiltersInSidebar
  } = useContext(DataTableContext);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-layout-wrapper', className)
  }, showFiltersInSidebar && setFilter && /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-layout-sidebar"
  }, /*#__PURE__*/React.createElement(SidebarFilters, {
    title: filtersTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-layout-main"
  }, children));
}
DataTableLayout.propTypes = {
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies title of the component. */
  filtersTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
DataTableLayout.defaultProps = {
  className: null,
  filtersTitle: undefined
};
export default DataTableLayout;
//# sourceMappingURL=DataTableLayout.js.map