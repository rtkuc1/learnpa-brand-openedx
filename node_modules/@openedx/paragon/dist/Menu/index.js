import React, { createElement } from 'react';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigationHook';
function Menu({
  as = 'div',
  arrowKeyNavigationSelector = 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  children,
  ...props
}) {
  const parentRef = useArrowKeyNavigation({
    selectors: arrowKeyNavigationSelector
  });
  const className = classNames(props.className, 'pgn__menu');
  return /*#__PURE__*/createElement(as, {
    ...props,
    ref: parentRef,
    className
  },
  /*#__PURE__*/
  // eslint-disable-next-line react/jsx-no-useless-fragment
  React.createElement(React.Fragment, null, children));
}
export default Menu;
//# sourceMappingURL=index.js.map