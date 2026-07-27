import React, { forwardRef } from 'react';
import classNames from 'classnames';
import RBContainer from 'react-bootstrap/Container';
var ContainerSizeClass = /*#__PURE__*/function (ContainerSizeClass) {
  ContainerSizeClass["xs"] = "container-mw-xs";
  ContainerSizeClass["sm"] = "container-mw-sm";
  ContainerSizeClass["md"] = "container-mw-md";
  ContainerSizeClass["lg"] = "container-mw-lg";
  ContainerSizeClass["xl"] = "container-mw-xl";
  return ContainerSizeClass;
}(ContainerSizeClass || {});
const Container = /*#__PURE__*/forwardRef(({
  size,
  children,
  as = 'div',
  bsPrefix = 'container',
  fluid = true,
  ...props
}, ref) => /*#__PURE__*/React.createElement(RBContainer, {
  ...props,
  as: as,
  bsPrefix: bsPrefix,
  fluid: fluid,
  ref: ref,
  className: classNames(props.className, size && ContainerSizeClass[size])
}, children));
export default Container;
//# sourceMappingURL=index.js.map