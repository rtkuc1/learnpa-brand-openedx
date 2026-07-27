import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { Close } from '../../icons';
import CheckpointTitle from './CheckpointTitle';
import messages from './messages';
const CheckpointHeader = /*#__PURE__*/React.forwardRef(({
  dismissAltText,
  index,
  onDismiss,
  title,
  totalCheckpoints
}, ref) => {
  const intl = useIntl();
  const oneBasedIndex = index + 1;
  const altText = dismissAltText && typeof dismissAltText === 'string' ? dismissAltText : intl.formatMessage(messages.closeAltText);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "pgn__checkpoint-header",
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    className: "pgn__checkpoint-page-index"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    ...messages.pageIndexText,
    values: {
      step: oneBasedIndex,
      totalSteps: totalCheckpoints
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    iconAs: Icon,
    src: Close,
    alt: altText,
    onClick: onDismiss,
    "data-testid": "dismiss-tour"
  })), title && /*#__PURE__*/React.createElement(CheckpointTitle, null, title));
});
CheckpointHeader.defaultProps = {
  dismissAltText: null,
  title: ''
};
CheckpointHeader.propTypes = {
  /** The text used in the alt for the icon used to dismiss the tour for the given Checkpoint */
  dismissAltText: PropTypes.string,
  /** The current index of the given Checkpoint */
  index: PropTypes.number.isRequired,
  /** A function that runs when triggering the `onClick` event of the dismiss
   * button for the given Checkpoint. */
  onDismiss: PropTypes.func.isRequired,
  /** The text displayed in the title of the Checkpoint */
  title: PropTypes.node,
  /** The total number of Checkpoints in a tour */
  totalCheckpoints: PropTypes.number.isRequired
};
export default CheckpointHeader;
//# sourceMappingURL=CheckpointHeader.js.map