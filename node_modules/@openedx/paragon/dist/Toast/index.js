import React, { useState } from 'react';
import classNames from 'classnames';
import BaseToast from 'react-bootstrap/Toast';
import { useIntl } from 'react-intl';
import { Close } from '../../icons';
import ToastContainer from './ToastContainer';
import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
export const TOAST_CLOSE_LABEL_TEXT = 'Close';
export const TOAST_DELAY = 5000;
function Toast({
  action,
  children,
  className,
  closeLabel,
  onClose,
  show,
  delay = TOAST_DELAY,
  ...rest
}) {
  const intl = useIntl();
  const [autoHide, setAutoHide] = useState(true);
  const intlCloseLabel = closeLabel || intl.formatMessage({
    id: 'pgn.Toast.closeLabel',
    defaultMessage: 'Close',
    description: 'Close label for Toast component'
  });
  return /*#__PURE__*/React.createElement(ToastContainer, null, /*#__PURE__*/React.createElement(BaseToast, {
    autohide: autoHide,
    className: classNames('pgn__toast', className),
    onClose: onClose,
    onBlur: () => setAutoHide(true),
    onFocus: () => setAutoHide(false),
    onMouseOut: () => setAutoHide(true),
    onMouseOver: () => setAutoHide(false),
    show: show,
    delay: delay,
    ...rest
  }, /*#__PURE__*/React.createElement("div", {
    className: "toast-header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "small"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "toast-header-btn-container"
  }, /*#__PURE__*/React.createElement(IconButton, {
    iconAs: Icon,
    alt: intlCloseLabel,
    className: "align-self-start",
    src: Close,
    onClick: onClose,
    variant: "primary",
    invertColors: true
  }))), action && /*#__PURE__*/React.createElement(Button, {
    as: action.href ? 'a' : 'button',
    href: action.href,
    onClick: action.onClick,
    size: "sm",
    variant: "inverse-outline-primary"
  }, action.label)));
}
export default Toast;
//# sourceMappingURL=index.js.map