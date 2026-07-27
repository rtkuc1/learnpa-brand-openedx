import React, { useContext } from 'react';
import PaginationContext from '../PaginationContext';
export default function PaginationScreenReaderText() {
  const {
    getScreenReaderText
  } = useContext(PaginationContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "sr-only",
    "aria-live": "polite",
    "aria-relevant": "text",
    "aria-atomic": true
  }, getScreenReaderText());
}
//# sourceMappingURL=ScreenReaderText.js.map