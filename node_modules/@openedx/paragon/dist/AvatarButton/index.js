import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Avatar from '../Avatar';
const buttonSizesToAvatarSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md'
};
const AvatarButton = /*#__PURE__*/React.forwardRef(({
  children,
  className,
  showLabel = true,
  size = 'md',
  src,
  variant = 'tertiary',
  ...attrs
}, ref) => {
  const avatarSize = buttonSizesToAvatarSize[size] || 'sm';
  return /*#__PURE__*/React.createElement(Button, {
    ...attrs,
    className: classNames('btn-avatar',
    // the public class name for custom styling
    'pgn__avatar-button-avatar', `pgn__avatar-button-avatar-${size}`, className, {
      'pgn__avatar-button-hide-label': !showLabel
    }),
    size: size,
    ref: ref,
    variant: variant
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: src,
    alt: showLabel ? '' : children,
    size: avatarSize
  }), showLabel && children);
});
export default AvatarButton;
//# sourceMappingURL=index.js.map