import React, { useContext } from 'react';
import classNames from 'classnames';
import PaginationContext from '../PaginationContext';
export default function PageOfCountButton() {
  const {
    getAriaLabelForPageOfCountButton,
    getPageOfText
  } = useContext(PaginationContext);
  const ariaLabel = getAriaLabelForPageOfCountButton();
  const label = getPageOfText();
  return /*#__PURE__*/React.createElement("li", {
    className: classNames('page-item', 'disabled')
  }, /*#__PURE__*/React.createElement("span", {
    className: classNames('btn', 'page-link', 'page-of-count'),
    "aria-label": ariaLabel
  }, label));
}
//# sourceMappingURL=PageOfCountButton.js.map