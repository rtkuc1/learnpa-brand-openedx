import React, { createElement } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
function MenuItem({
  as = 'button',
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected = false,
  iconAfter,
  iconBefore,
  ...props
}) {
  const className = classNames(props.className, 'pgn__menu-item');
  return /*#__PURE__*/createElement(as, {
    ...props,
    className
  }, /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-before",
    src: iconBefore
  }), /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-text"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-after",
    src: iconAfter
  })));
}
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map