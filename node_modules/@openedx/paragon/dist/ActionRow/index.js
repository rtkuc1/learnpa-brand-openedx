import React from 'react';
import classNames from 'classnames';
function ActionRow({
  as = 'div',
  isStacked = false,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement(as, {
    ...props,
    className: classNames(props.className, {
      'pgn__action-row': !isStacked,
      'pgn__action-row-stacked': isStacked
    })
  }, children);
}
function ActionRowSpacer() {
  return /*#__PURE__*/React.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
ActionRow.Spacer = ActionRowSpacer;
export { ActionRowSpacer };
export default ActionRow;
//# sourceMappingURL=index.js.map