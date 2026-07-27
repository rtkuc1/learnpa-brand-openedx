import React from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useIntl } from 'react-intl';
import ModalLayer from './ModalLayer';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalCloseButton from './ModalCloseButton';
import ModalDialogHeader from './ModalDialogHeader';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogTitle from './ModalDialogTitle';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogFooter from './ModalDialogFooter';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogBody from './ModalDialogBody';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogHero from './ModalDialogHero';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { Close } from '../../icons';
import messages from './messages';
function ModalDialog({
  children,
  title,
  isOpen = false,
  onClose,
  size = 'md',
  variant = 'default',
  hasCloseButton = true,
  closeLabel,
  isFullscreenScroll = false,
  className,
  isFullscreenOnMobile = false,
  isBlocking = false,
  zIndex,
  isOverflowVisible
}) {
  const intl = useIntl();
  const closeButtonText = closeLabel || intl.formatMessage(messages.closeButtonText);
  const isMobile = useMediaQuery({
    query: '(max-width: 767.98px)'
  });
  const showFullScreen = isFullscreenOnMobile && isMobile;
  return /*#__PURE__*/React.createElement(ModalLayer, {
    isOpen: isOpen,
    onClose: onClose,
    isBlocking: isBlocking,
    zIndex: zIndex
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": title,
    className: classNames('pgn__modal', {
      [`pgn__modal-${showFullScreen ? 'fullscreen' : size}`]: size,
      [`pgn__modal-${variant}`]: variant,
      'pgn__modal-scroll-fullscreen': isFullscreenScroll,
      'pgn__modal-visible-overflow': isOverflowVisible
    }, className)
  }, hasCloseButton && /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-close-container"
  }, /*#__PURE__*/React.createElement(ModalCloseButton, {
    as: IconButton,
    iconAs: Icon,
    invertColors: variant === 'dark',
    src: Close,
    alt: closeButtonText
  })), children));
}
ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;
export default ModalDialog;
//# sourceMappingURL=ModalDialog.js.map