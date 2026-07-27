import React from 'react';
import PropTypes from 'prop-types';
function DragError({
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__dropzone-error-wrapper"
  }, message);
}
DragError.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};
export default DragError;
//# sourceMappingURL=DragError.js.map