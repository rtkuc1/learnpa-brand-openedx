import React from 'react';
import classNames from 'classnames';
function CardCarouselSubtitle({
  children,
  as,
  className
}) {
  const Component = as || 'p';
  return /*#__PURE__*/React.createElement(Component, {
    className: classNames('pgn__card-carousel-subtitle', className)
  }, children);
}
export default CardCarouselSubtitle;
//# sourceMappingURL=CardCarouselSubtitle.js.map