import React from 'react';
import classNames from 'classnames';
function CardCarouselTitle({
  children,
  as,
  className
}) {
  const Component = as || 'h2';
  return /*#__PURE__*/React.createElement(Component, {
    className: classNames('pgn__card-carousel-title', className)
  }, children);
}
export default CardCarouselTitle;
//# sourceMappingURL=CardCarouselTitle.js.map