import React from 'react';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '../../icons';
import Icon from '../Icon';
import IconButton from '../IconButton';
const EXPAND_COLLAPSE_ICON_SIZE = 'inline';
function ExpandRow({
  row
}) {
  return /*#__PURE__*/React.createElement("span", {
    ...row.getToggleRowExpandedProps()
  }, row.isExpanded ? /*#__PURE__*/React.createElement(IconButton, {
    src: ExpandLess,
    iconAs: Icon,
    alt: "Collapse row",
    size: EXPAND_COLLAPSE_ICON_SIZE
  }) : /*#__PURE__*/React.createElement(IconButton, {
    src: ExpandMore,
    iconAs: Icon,
    alt: "Expand row",
    size: EXPAND_COLLAPSE_ICON_SIZE
  }));
}
ExpandRow.propTypes = {
  /** Row data that is received from `react-table` API. */
  row: PropTypes.shape({
    /** Specifies if row is in expanded state. */
    isExpanded: PropTypes.bool,
    /** Function that returns props for the wrapper component to handle expand behaviour. */
    getToggleRowExpandedProps: PropTypes.func.isRequired
  }).isRequired
};
export default ExpandRow;
//# sourceMappingURL=ExpandRow.js.map