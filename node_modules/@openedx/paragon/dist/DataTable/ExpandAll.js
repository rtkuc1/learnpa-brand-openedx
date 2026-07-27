import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';
function ExpandAll({
  getToggleAllRowsExpandedProps,
  isAllRowsExpanded
}) {
  return /*#__PURE__*/React.createElement("span", {
    ...getToggleAllRowsExpandedProps()
  }, isAllRowsExpanded ? /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "inline"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.ExpandAll.collapseAllLabel",
    defaultMessage: "Collapse all",
    description: "Label of an action button that collapses all expandable rows of DataTable."
  })) : /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "inline"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.ExpandAll.expandAllLabel",
    defaultMessage: "Expand all",
    description: "Label of an action button that expands all expandable rows of DataTable."
  })));
}
ExpandAll.propTypes = {
  /** A helper function that returns props necessary for expand / collapse all rows behaviour. */
  getToggleAllRowsExpandedProps: PropTypes.func.isRequired,
  /** Specifies whether all rows are expanded. */
  isAllRowsExpanded: PropTypes.bool.isRequired
};
export default ExpandAll;
//# sourceMappingURL=ExpandAll.js.map