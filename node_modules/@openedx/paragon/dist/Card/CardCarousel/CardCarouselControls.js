import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import Stack from '../../Stack';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import { ArrowForward, ArrowBack } from '../../../icons';
import { CardCarouselContext } from './CardCarouselProvider';
import messages from './messages';
function CardCarouselControls() {
  const {
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext
  } = useContext(CardCarouselContext);
  const intl = useIntl();
  if (isScrolledToStart && isScrolledToEnd) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-carousel-controls"
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "horizontal",
    gap: 1
  }, /*#__PURE__*/React.createElement(IconButton, {
    disabled: isScrolledToStart,
    src: ArrowBack,
    iconAs: Icon,
    alt: intl.formatMessage(messages.scrollToPrevious),
    onClick: scrollToPrevious
  }), /*#__PURE__*/React.createElement(IconButton, {
    disabled: isScrolledToEnd,
    src: ArrowForward,
    iconAs: Icon,
    alt: intl.formatMessage(messages.scrollToNext),
    onClick: scrollToNext
  })));
}
export default CardCarouselControls;
//# sourceMappingURL=CardCarouselControls.js.map