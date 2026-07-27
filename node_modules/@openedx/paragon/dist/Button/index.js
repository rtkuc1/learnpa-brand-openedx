import React from 'react';
import classNames from 'classnames';
import BaseButton from 'react-bootstrap/Button';
import BaseButtonGroup from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Icon from '../Icon';

/**
 * This was added so these types could be added as a non-breaking change.
 * @deprecated - remove in Paragon 24
 */
// Allow any other string value for now, even though it's invalid

const Button = /*#__PURE__*/React.forwardRef(({
  children,
  iconAfter,
  iconBefore,
  size,
  ...props
}, ref) => /*#__PURE__*/React.createElement(BaseButton, {
  size: size // Bootstrap's <Button> types do not allow 'md' or 'inline', but we do.
  ,
  ...props,
  className: classNames(props.className),
  ref: ref
}, iconBefore && /*#__PURE__*/React.createElement(Icon, {
  className: "btn-icon-before",
  size: size,
  src: iconBefore
}), children, iconAfter && /*#__PURE__*/React.createElement(Icon, {
  className: "btn-icon-after",
  size: size,
  src: iconAfter
})));

// We could just re-export 'ButtonGroup', but we currently override it to
// force ButtonGroup's 'size' prop to accept our custom values of 'md' and
// 'inline' which are used in Paragon but not used in the base Bootstrap classes.

const ButtonGroup = /*#__PURE__*/React.forwardRef(({
  size = 'md',
  ...props
}, ref) => /*#__PURE__*/React.createElement(BaseButtonGroup, {
  size: size,
  ...props,
  ref: ref
}));

// We could just re-export 'ButtonToolbar', but we currently override it to
// narrow the type of 'role' to valid roles and to document its properties.

const ButtonToolbar = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(BaseButtonToolbar, {
  ...props,
  ref: ref
}));
export default Button;
export { ButtonGroup, ButtonToolbar };
//# sourceMappingURL=index.js.map