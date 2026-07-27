import React, { useContext, useMemo } from 'react';
import { useIntl } from 'react-intl';
import DataTableContext from './DataTableContext';
import { DropdownButton } from '../Dropdown';
import useWindowSize from '../hooks/useWindowSizeHook';
import breakpoints from '../utils/breakpoints';
import messages from './messages';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
function DropdownFilters() {
  const intl = useIntl();
  const {
    width
  } = useWindowSize();
  const {
    columns,
    numBreakoutFilters,
    filtersTitle
  } = useContext(DataTableContext);
  const [breakoutFilters, otherFilters] = useMemo(() => {
    if (!columns) {
      return [[], []];
    }
    const availableFilters = columns.filter(column => column.canFilter);
    if (width < breakpoints.small.minWidth) {
      return [[], availableFilters];
    }
    const numberOfBreakoutFilters = numBreakoutFilters ?? 1;
    const boFilters = availableFilters.slice(0, numberOfBreakoutFilters);
    const dropdownFilters = availableFilters.slice(numberOfBreakoutFilters);
    return [boFilters, dropdownFilters];
  }, [columns, width, numBreakoutFilters]);
  const dropdownTitle = filtersTitle || intl.formatMessage(messages.filtersDropdownTitle);
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-filters"
  }, breakoutFilters.length > 0 && breakoutFilters.map(column => /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-filters-breakout-filter",
    key: column.Header
  }, column.render('Filter'))), otherFilters.length > 0 && /*#__PURE__*/React.createElement(DropdownButton, {
    variant: "outline-primary",
    id: "table-filters-dropdown",
    title: dropdownTitle
  }, otherFilters.map(column => /*#__PURE__*/React.createElement("div", {
    key: column.Header,
    className: "pgn__data-table-filters-dropdown-item"
  }, column.render('Filter')))));
}
export default DropdownFilters;
//# sourceMappingURL=DropdownFilters.js.map