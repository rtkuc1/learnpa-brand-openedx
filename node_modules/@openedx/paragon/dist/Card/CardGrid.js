import React, { useMemo } from 'react';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CardGrid({
  className,
  children,
  columnSizes = {
    sm: 12,
    lg: 6,
    xl: 4
  },
  hasEqualColumnHeights = true
}) {
  const cards = useMemo(() => React.Children.map(children, card => /*#__PURE__*/React.createElement(Col, {
    ...columnSizes,
    className: classNames('pgn__card-grid__card-item', {
      'pgn__card__disable-equal-column-heights': !hasEqualColumnHeights
    })
  }, card)), [children, columnSizes, hasEqualColumnHeights]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-grid', className)
  }, /*#__PURE__*/React.createElement(Row, null, cards));
}
export default CardGrid;
//# sourceMappingURL=CardGrid.js.map