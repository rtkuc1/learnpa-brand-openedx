import React, { useEffect } from 'react';
import classNames from 'classnames';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext';
function ModalBackdrop({
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-backdrop",
    onClick: onClick,
    onKeyDown: onClick,
    "data-testid": "modal-backdrop",
    role: "presentation"
  });
}

// istanbul ignore next
function ModalContentContainer({
  children = null
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-content-container"
  }, children);
}
/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */
function ModalLayer({
  children,
  onClose,
  isOpen,
  isBlocking = false,
  zIndex
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('pgn__hidden-scroll-padding-right');
    } else {
      document.body.classList.remove('pgn__hidden-scroll-padding-right');
    }
    return () => {
      document.body.classList.remove('pgn__hidden-scroll-padding-right');
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  const handleClose = isBlocking ? undefined : onClose;
  return /*#__PURE__*/React.createElement(ModalContextProvider, {
    onClose: onClose,
    isOpen: isOpen,
    isBlocking: isBlocking
  }, /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(FocusOn, {
    allowPinchZoom: true,
    scrollLock: true,
    enabled: isOpen,
    onEscapeKey: handleClose,
    onClickOutside: handleClose,
    className: classNames('pgn__modal-layer', zIndex ? `zindex-${zIndex}` : '')
  }, /*#__PURE__*/React.createElement(ModalContentContainer, null, /*#__PURE__*/React.createElement(ModalBackdrop, {
    onClick: handleClose
  }), children))));
}
export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
//# sourceMappingURL=ModalLayer.js.map