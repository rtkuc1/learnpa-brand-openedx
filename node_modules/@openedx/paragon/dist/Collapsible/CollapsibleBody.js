import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../Collapse';
import { CollapsibleContext } from './CollapsibleAdvanced';
import TransitionReplace from '../TransitionReplace';
function CollapsibleBody({
  children,
  transitionWrapper,
  tag,
  ...props
}) {
  const {
    isOpen,
    unmountOnExit
  } = useContext(CollapsibleContext);

  // Keys are added to these elements so that TransitionReplace
  // will recognize them as unique components and perform the
  // transition properly.
  const content = /*#__PURE__*/React.createElement(tag, {
    key: 'body',
    ...props
  }, children);
  const transitionBody = isOpen ? content : /*#__PURE__*/React.createElement("div", {
    key: "empty"
  });
  if (transitionWrapper) {
    return /*#__PURE__*/React.cloneElement(transitionWrapper, {}, transitionBody);
  }
  /* istanbul ignore next */
  return unmountOnExit ? /*#__PURE__*/React.createElement(TransitionReplace, null, transitionBody) : /*#__PURE__*/React.createElement(Collapse, {
    in: isOpen
  }, content);
}
CollapsibleBody.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies content's base element. */
  tag: PropTypes.string,
  /** Specifies transition element. */
  transitionWrapper: PropTypes.element
};
CollapsibleBody.defaultProps = {
  children: undefined,
  tag: 'div',
  transitionWrapper: undefined
};
export default CollapsibleBody;
//# sourceMappingURL=CollapsibleBody.js.map