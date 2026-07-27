import React from 'react';
import BaseBadge from 'react-bootstrap/Badge';
const STYLE_VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
const Badge = /*#__PURE__*/React.forwardRef(({
  as = 'span',
  variant = 'primary',
  pill = false,
  bsPrefix = 'badge',
  ...props
}, ref) => /*#__PURE__*/React.createElement(BaseBadge, {
  as: as,
  variant: variant,
  pill: pill,
  bsPrefix: bsPrefix,
  ...props,
  ref: ref
}));
export default Badge;
//# sourceMappingURL=index.js.map