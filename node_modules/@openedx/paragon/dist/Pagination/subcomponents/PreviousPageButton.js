import React, { useContext } from 'react';
import classNames from 'classnames';
import { PAGINATION_BUTTON_ICON_BUTTON_PREV_ALT } from '../constants';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import PaginationContext from '../PaginationContext';
export default function PreviousPageButton() {
  const {
    invertColors,
    getPageButtonVariant,
    isDefaultVariant,
    isOnFirstPage,
    getAriaLabelForPreviousButton,
    handlePreviousButtonClick,
    getPrevButtonIcon,
    buttonLabels,
    previousButtonRef
  } = useContext(PaginationContext);
  const isDisabled = isOnFirstPage();
  const icon = getPrevButtonIcon();
  if (isDefaultVariant()) {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('page-item', {
        disabled: isDisabled
      })
    }, /*#__PURE__*/React.createElement(Button, {
      className: "previous page-link",
      variant: getPageButtonVariant(),
      "aria-label": getAriaLabelForPreviousButton(),
      tabIndex: isDisabled ? '-1' : undefined,
      onClick: handlePreviousButtonClick,
      ref: previousButtonRef,
      disabled: isDisabled,
      iconBefore: icon
    }, buttonLabels.previous));
  }
  if (!icon) {
    return null;
  }
  return /*#__PURE__*/React.createElement("li", {
    className: classNames('page-item', {
      disabled: isDisabled
    })
  }, /*#__PURE__*/React.createElement(IconButton, {
    invertColors: invertColors,
    src: getPrevButtonIcon(),
    iconAs: Icon,
    className: "previous page-link",
    "aria-label": getAriaLabelForPreviousButton(),
    tabIndex: isDisabled ? '-1' : undefined,
    onClick: handlePreviousButtonClick,
    ref: previousButtonRef,
    disabled: isDisabled,
    alt: PAGINATION_BUTTON_ICON_BUTTON_PREV_ALT
  }));
}
//# sourceMappingURL=PreviousPageButton.js.map