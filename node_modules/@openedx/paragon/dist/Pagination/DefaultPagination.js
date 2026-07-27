import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import PaginationContext from './PaginationContext';
import { ELLIPSIS } from './constants';
import { PreviousPageButton, NextPageButton, PageOfCountButton, PageButton, Ellipsis } from './subcomponents';
import breakpoints from '../utils/breakpoints';
import newId from '../utils/newId';
function PaginationPages() {
  const {
    displayPages
  } = useContext(PaginationContext);
  const isMobile = useMediaQuery({
    maxWidth: breakpoints.extraSmall.maxWidth
  });
  if (isMobile) {
    return /*#__PURE__*/React.createElement(PageOfCountButton, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, displayPages.map(pageIndex => {
    if (pageIndex === ELLIPSIS) {
      return /*#__PURE__*/React.createElement(Ellipsis, {
        key: newId('pagination-ellipsis-')
      });
    }
    return /*#__PURE__*/React.createElement(PageButton, {
      key: pageIndex,
      pageNum: pageIndex + 1
    });
  }));
}
export default function DefaultPagination() {
  return /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement(PreviousPageButton, null), /*#__PURE__*/React.createElement(PaginationPages, null), /*#__PURE__*/React.createElement(NextPageButton, null));
}
//# sourceMappingURL=DefaultPagination.js.map