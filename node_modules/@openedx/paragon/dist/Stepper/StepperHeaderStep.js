import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Check, Error } from '../../icons';
import { StepperContext } from './StepperContext';
import Icon from '../Icon';
import Bubble from '../Bubble';
function StepperHeaderStep({
  title,
  isActive,
  hasError,
  description,
  index,
  onClick
}) {
  const {
    getIsViewed
  } = useContext(StepperContext);
  const isComplete = getIsViewed(index + 1);
  const isViewed = getIsViewed(index);
  const stepIcon = isComplete ? /*#__PURE__*/React.createElement(Icon, {
    src: Check
  }) : /*#__PURE__*/React.createElement("span", null, index + 1);
  const errorIcon = /*#__PURE__*/React.createElement(Icon, {
    src: Error,
    "data-testid": "step-error"
  });
  const isClickable = onClick && isViewed && !isActive;
  if (isClickable) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": `${title} step`,
      className: classNames('pgn__stepper-header-step', {
        'pgn__stepper-header-step-has-error': hasError,
        'pgn__stepper-header-step-complete': isComplete
      }),
      onClick: onClick,
      onKeyPress: onClick
    }, /*#__PURE__*/React.createElement(Bubble, {
      variant: hasError ? 'error' : 'primary',
      disabled: true
    }, hasError ? errorIcon : stepIcon), /*#__PURE__*/React.createElement("div", {
      className: "pgn__stepper-header-step-title-description"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pgn__stepper-header-step-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "pgn__stepper-header-step-description"
    }, description)));
  }
  return /*#__PURE__*/React.createElement("li", {
    className: classNames('pgn__stepper-header-step', {
      'pgn__stepper-header-step-active': isActive,
      'pgn__stepper-header-step-has-error': hasError,
      'pgn__stepper-header-step-complete': isComplete
    }),
    "data-testid": "step"
  }, /*#__PURE__*/React.createElement(Bubble, {
    variant: hasError ? 'error' : 'primary',
    disabled: !isActive
  }, hasError ? errorIcon : stepIcon), /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-title-description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "pgn__stepper-header-step-description"
  }, description)));
}
StepperHeaderStep.propTypes = {
  /** A number that will be display in the icon of the `HeaderStep`. */
  index: PropTypes.number.isRequired,
  /** A text of the `HeaderStep`. */
  title: PropTypes.string.isRequired,
  /** Specifies that this `HeaderStep` is active. */
  isActive: PropTypes.bool,
  /** Informs user if this `Step` has errors. */
  hasError: PropTypes.bool,
  /** A text under the `title`. */
  description: PropTypes.string,
  /** Callback fired when element gets clicked. */
  onClick: PropTypes.func
};
StepperHeaderStep.defaultProps = {
  isActive: false,
  hasError: false,
  description: undefined,
  onClick: undefined
};
export default StepperHeaderStep;
//# sourceMappingURL=StepperHeaderStep.js.map