import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '../../icons';
import CollapsibleAdvanced, { CollapsibleContext } from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';
import Icon from '../Icon';
const styleIcons = {
  basic: {
    iconWhenClosed: /*#__PURE__*/React.createElement(Icon, {
      src: ExpandMore
    }),
    iconWhenOpen: /*#__PURE__*/React.createElement(Icon, {
      src: ExpandLess
    })
  }
  // card and card-lg use the defaults specified in defaultProps
};
const Collapsible = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    className,
    title,
    styling,
    iconWhenClosed,
    iconWhenOpen,
    ...other
  } = props;
  const icons = {
    iconWhenClosed,
    iconWhenOpen,
    ...styleIcons[styling]
  };
  const titleElement = /*#__PURE__*/React.isValidElement(title) ? title : /*#__PURE__*/React.createElement("span", null, title);
  return /*#__PURE__*/React.createElement(Collapsible.Advanced, {
    ...other,
    className: classNames(className, `collapsible-${styling}`),
    ref: ref
  }, /*#__PURE__*/React.createElement(Collapsible.Trigger, {
    className: "collapsible-trigger"
  }, titleElement, /*#__PURE__*/React.createElement("span", {
    className: "collapsible-icon"
  }, /*#__PURE__*/React.createElement(Collapsible.Visible, {
    whenClosed: true
  }, icons.iconWhenClosed), /*#__PURE__*/React.createElement(Collapsible.Visible, {
    whenOpen: true
  }, icons.iconWhenOpen))), /*#__PURE__*/React.createElement(Collapsible.Body, {
    className: "collapsible-body"
  }, children));
});
Collapsible.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether the `Collapsible` should be initially open. */
  defaultOpen: PropTypes.bool,
  /** Specifies icon to show when `Collapsible` is closed. */
  iconWhenClosed: PropTypes.element,
  /** Specifies icon to show when `Collapsible` is open. */
  iconWhenOpen: PropTypes.element,
  /** Callback fired when `Collapsible` closes. */
  onClose: PropTypes.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: PropTypes.func,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: PropTypes.func,
  /** Specifies whether `Collapsible` is open. */
  open: PropTypes.bool,
  /** Specifies style variant. */
  styling: PropTypes.oneOf(['basic', 'card', 'card-lg']),
  /** Specifies title. */
  title: PropTypes.node.isRequired,
  /** Unmount the component (remove it from the DOM) when it is collapsed */
  unmountOnExit: PropTypes.bool
};
Collapsible.defaultProps = {
  className: undefined,
  defaultOpen: false,
  iconWhenClosed: /*#__PURE__*/React.createElement(Icon, {
    src: ExpandMore
  }),
  iconWhenOpen: /*#__PURE__*/React.createElement(Icon, {
    src: ExpandLess
  }),
  onClose: undefined,
  onOpen: undefined,
  onToggle: undefined,
  open: undefined,
  styling: 'card',
  unmountOnExit: true
};
Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;
Collapsible.Context = CollapsibleContext;
export default Collapsible;
//# sourceMappingURL=index.js.map