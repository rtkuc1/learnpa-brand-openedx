import React from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
// @ts-ignore
import { OverflowScroll, OverflowScrollContext } from '../OverflowScroll';
import IconButton from '../IconButton';
import Icon from '../Icon';
// @ts-ignore
import { ArrowForward, ArrowBack } from '../../icons';
// @ts-ignore
import messages from './messages';
import Chip from '../Chip';
const ChipCarousel = /*#__PURE__*/React.forwardRef(({
  className,
  items,
  ariaLabel,
  disableOpacityMasks,
  onScrollPrevious,
  onScrollNext,
  canScrollHorizontal = false,
  offset = 120,
  offsetType = 'fixed',
  gap = 3,
  ...props
}, ref) => {
  const intl = useIntl();
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__chip-carousel', className, gap ? `pgn__chip-carousel-gap__${gap}` : ''),
    ...props,
    ref: ref
  }, /*#__PURE__*/React.createElement(OverflowScroll, {
    ariaLabel: ariaLabel,
    hasInteractiveChildren: true,
    disableScroll: !canScrollHorizontal,
    disableOpacityMasks: disableOpacityMasks,
    onScrollPrevious: onScrollPrevious,
    onScrollNext: onScrollNext,
    offset: offset,
    offsetType: offsetType
  }, /*#__PURE__*/React.createElement(OverflowScrollContext.Consumer, null, ({
    setOverflowRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, !isScrolledToStart && /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    className: "pgn__chip-carousel__left-control",
    src: ArrowBack,
    iconAs: Icon,
    alt: intl.formatMessage(messages.scrollToPrevious),
    onClick: scrollToPrevious
  }), !isScrolledToEnd && /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    className: "pgn__chip-carousel__right-control",
    src: ArrowForward,
    iconAs: Icon,
    alt: intl.formatMessage(messages.scrollToNext),
    onClick: scrollToNext
  })), /*#__PURE__*/React.createElement("div", {
    ref: setOverflowRef,
    className: "d-flex"
  }, /*#__PURE__*/React.createElement(OverflowScroll.Items, null, items?.map((item, id) => {
    const {
      children
    } = item?.props || {};
    if (!children) {
      return null;
    }
    // eslint-disable-next-line react/no-array-index-key
    return /*#__PURE__*/React.createElement(Chip, {
      ...item.props,
      key: id
    });
  })))))));
});
export default ChipCarousel;
//# sourceMappingURL=index.js.map