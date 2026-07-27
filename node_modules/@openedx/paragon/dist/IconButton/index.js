import React from 'react';
import classNames from 'classnames';
import { OverlayTrigger } from '../Overlay';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
const IconButton = /*#__PURE__*/React.forwardRef(({
  className,
  alt,
  invertColors = false,
  icon,
  src,
  iconClassNames,
  onClick = () => {},
  size = 'md',
  variant = 'primary',
  iconAs = Icon,
  isActive = false,
  children,
  // unused, just here because we don't want it to be part of 'attrs'
  ...attrs
}, ref) => {
  const invert = invertColors ? 'inverse-' : '';
  const activeStyle = isActive ? `${variant}-` : '';
  const IconComponent = iconAs;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": alt,
    className: classNames('btn-icon', `btn-icon-${invert}${variant}`, `btn-icon-${size}`, {
      [`btn-icon-${invert}${activeStyle}active`]: isActive
    }, className),
    onClick: onClick,
    type: "button",
    ref: ref,
    ...attrs
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-icon__icon-container"
  }, IconComponent && /*#__PURE__*/React.createElement(IconComponent, {
    className: classNames('btn-icon__icon', iconClassNames),
    icon: icon,
    src: src
  })));
});
/**
 * An icon button wrapped in overlaytrigger to display a tooltip.
 */
function IconButtonWithTooltip({
  tooltipPlacement = 'top',
  tooltipContent,
  ...props
}) {
  const invert = props.invertColors ? 'inverse-' : '';
  return /*#__PURE__*/React.createElement(OverlayTrigger, {
    placement: tooltipPlacement,
    overlay: /*#__PURE__*/React.createElement(Tooltip, {
      id: `iconbutton-tooltip-${tooltipPlacement}`,
      variant: invert ? 'light' : undefined
    }, tooltipContent)
  }, /*#__PURE__*/React.createElement(IconButton, {
    ...props
  }));
}
IconButton.IconButtonWithTooltip = IconButtonWithTooltip;
export default IconButton;
export { IconButtonWithTooltip };
//# sourceMappingURL=index.js.map