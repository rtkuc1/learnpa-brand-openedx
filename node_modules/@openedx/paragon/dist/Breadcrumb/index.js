import React from 'react';
import classNames from 'classnames';
import BreadcrumbLink from './BreadcrumbLink';
import { ChevronRight } from '../../icons';
import Icon from '../Icon';
function Breadcrumb({
  links,
  activeLabel,
  spacer,
  clickHandler,
  className,
  variant = 'light',
  isMobile = false,
  ariaLabel = 'breadcrumb',
  linkAs = 'a'
}) {
  const linkCount = links.length;
  const displayLinks = isMobile ? [links[linkCount - 1]] : links;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": ariaLabel,
    className: classNames('pgn__breadcrumb', `pgn__breadcrumb-${variant}`, className)
  }, /*#__PURE__*/React.createElement("ol", {
    className: classNames('list-inline', {
      'is-mobile': isMobile
    })
  }, displayLinks.map((link, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: link.label
  }, /*#__PURE__*/React.createElement("li", {
    className: classNames('list-inline-item')
  }, /*#__PURE__*/React.createElement(BreadcrumbLink, {
    as: linkAs,
    clickHandler: clickHandler,
    linkProps: link
  })), (activeLabel || i + 1 < linkCount) && /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item",
    role: "presentation"
  }, spacer || /*#__PURE__*/React.createElement(Icon, {
    src: ChevronRight,
    id: `spacer-${i}`
  })))), !isMobile && activeLabel && /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item active",
    key: "active",
    "aria-current": "page"
  }, activeLabel)));
}
export default Breadcrumb;
//# sourceMappingURL=index.js.map