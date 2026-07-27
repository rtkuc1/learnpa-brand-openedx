import React from 'react';
import PropTypes from 'prop-types';
const CheckpointBody = /*#__PURE__*/React.forwardRef(({
  children
}, ref) => {
  if (!children) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__checkpoint-body",
    ref: ref
  }, children);
});
CheckpointBody.defaultProps = {
  children: null
};
CheckpointBody.propTypes = {
  children: PropTypes.node
};
export default CheckpointBody;
//# sourceMappingURL=CheckpointBody.js.map