import React, { useContext } from 'react';
import PaginationContext from '../PaginationContext';
import Dropdown from '../../Dropdown';
export default function PaginationDropdown() {
  const {
    getPageOfText,
    pageCount,
    handlePageSelect,
    getPageButtonVariant
  } = useContext(PaginationContext);
  if (pageCount <= 1) {
    return null;
  }
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Dropdown, null, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: getPageButtonVariant(),
    id: "Pagination dropdown"
  }, getPageOfText()), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: "pagination-reduced-dropdown-menu"
  }, [...Array(pageCount).keys()].map(pageNum => /*#__PURE__*/React.createElement(Dropdown.Item, {
    onClick: () => handlePageSelect(pageNum + 1),
    key: pageNum,
    "data-testid": "pagination-dropdown-item"
  }, pageNum + 1)))));
}
//# sourceMappingURL=PaginationDropdown.js.map