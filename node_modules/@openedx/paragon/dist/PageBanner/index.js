import React from 'react';
import classNames from 'classnames';
import { Close } from '../../icons';
import Icon from '../Icon';
import IconButton from '../IconButton';
export const PAGE_BANNER_DISMISS_ALT_TEXT = 'Dismiss';
export const VARIANTS = {
  light: 'light',
  dark: 'dark',
  warning: 'warning',
  accentA: 'accentA',
  accentB: 'accentB'
};
function PageBanner({
  children,
  dismissible = false,
  dismissAltText = PAGE_BANNER_DISMISS_ALT_TEXT,
  onDismiss = () => {},
  show = true,
  variant = VARIANTS.accentA,
  ...rest
}) {
  if (!show) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__pageBanner-component', `pgn__pageBanner__${variant}`),
    role: "alert",
    "aria-live": "polite",
    "aria-atomic": "true",
    ...rest
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__pageBanner-content"
  }, children), dismissible && /*#__PURE__*/React.createElement("span", {
    className: "pgn__pageBanner-dismissButtonContainer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onDismiss,
    iconAs: Icon,
    alt: dismissAltText,
    src: Close,
    size: "inline",
    invertColors: variant === 'dark',
    variant: variant === 'dark' ? 'dark' : 'black'
  })));
}
export default PageBanner;
//# sourceMappingURL=index.js.map