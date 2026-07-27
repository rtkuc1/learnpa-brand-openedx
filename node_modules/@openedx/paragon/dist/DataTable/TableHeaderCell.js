import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { ArrowDropDown, ArrowDropUp, ArrowDropUpDown } from '../../icons';
export function SortIndicator({
  isSorted,
  isSortedDesc
}) {
  if (!isSorted) {
    return /*#__PURE__*/React.createElement(Icon, {
      style: {
        opacity: 0.5
      },
      src: ArrowDropUpDown,
      "data-testid": "arrow-drop-up-down"
    });
  }
  if (isSortedDesc) {
    return /*#__PURE__*/React.createElement(Icon, {
      src: ArrowDropDown,
      "data-testid": "arrow-drop-down"
    });
  }
  return /*#__PURE__*/React.createElement(Icon, {
    src: ArrowDropUp,
    "data-testid": "arrow-drop-up"
  });
}
function TableHeaderCell({
  getHeaderProps,
  render,
  canSort = false,
  getSortByToggleProps = () => ({}),
  isSorted = false,
  isSortedDesc = false,
  headerClassName
}) {
  const toggleProps = canSort && getSortByToggleProps ? getSortByToggleProps() : {};
  return /*#__PURE__*/React.createElement("th", {
    ...getHeaderProps(toggleProps)
  }, /*#__PURE__*/React.createElement("span", {
    className: classNames('d-flex align-items-center', headerClassName)
  }, /*#__PURE__*/React.createElement("span", null, render('Header')), canSort && /*#__PURE__*/React.createElement(SortIndicator, {
    isSorted: isSorted,
    isSortedDesc: isSortedDesc || false
  })));
}
export default TableHeaderCell;
//# sourceMappingURL=TableHeaderCell.js.map