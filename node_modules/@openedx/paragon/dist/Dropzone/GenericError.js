import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { Info } from '../../icons';
function GenericError({
  errorMsgs,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Alert, {
    variant: "danger",
    icon: Info,
    className: "pgn__dropzone-generic-alert",
    ...rest
  }, errorMsgs.map(msg => /*#__PURE__*/React.createElement("span", {
    key: msg
  }, msg)));
}
GenericError.propTypes = {
  errorMsgs: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default GenericError;
//# sourceMappingURL=GenericError.js.map