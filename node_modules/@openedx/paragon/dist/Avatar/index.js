import React from 'react';
import classNames from 'classnames';
// @ts-ignore
import defaultAvatar from './default-avatar.svg';
function Avatar({
  alt = '',
  size = 'md',
  src,
  ...attrs
}) {
  return /*#__PURE__*/React.createElement("img", {
    ...attrs,
    className: classNames('pgn__avatar', `pgn__avatar-${size}`, attrs.className),
    src: src || defaultAvatar,
    alt: alt
  });
}
export default Avatar;
//# sourceMappingURL=index.js.map