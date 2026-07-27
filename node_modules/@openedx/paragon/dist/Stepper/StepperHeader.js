import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext } from './StepperContext';
import useWindowSize from '../hooks/useWindowSizeHook';
import breakpoints, { Size } from '../utils/breakpoints';
function StepListSeparator() {
  return /*#__PURE__*/React.createElement("li", {
    "aria-hidden": "true",
    className: "pgn__stepper-header-line"
  });
}
function StepList({
  steps,
  activeKey
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "pgn__stepper-header-step-list"
  }, steps.map(({
    label,
    ...stepProps
  }, index) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: stepProps.eventKey
  }, index !== 0 && /*#__PURE__*/React.createElement(StepListSeparator, null), /*#__PURE__*/React.createElement(StepperHeaderStep, {
    ...stepProps,
    index: index,
    isActive: activeKey === stepProps.eventKey
  }, label))));
}
const PageCount = ({
  activeStepIndex,
  totalSteps
}) => `Step ${activeStepIndex + 1} of ${totalSteps}`;
function StepperHeader({
  className,
  PageCountComponent,
  compactWidth
}) {
  const {
    steps,
    activeKey
  } = useContext(StepperContext);
  const windowDimensions = useWindowSize();
  const size = Size[compactWidth] || 'small';
  const breakpointWidth = breakpoints[size].maxWidth || Infinity;
  const isCompactView = windowDimensions.width < breakpointWidth;
  if (isCompactView) {
    const activeStepIndex = steps.findIndex(step => step.eventKey === activeKey);
    const activeStep = steps[activeStepIndex];
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__stepper-header', className)
    }, /*#__PURE__*/React.createElement(StepperHeaderStep, {
      ...activeStep,
      index: activeStepIndex,
      isActive: true
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex-grow-1"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageCountComponent, {
      activeStepIndex: activeStepIndex,
      totalSteps: steps.length
    })));
  }

  // Show all steps
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__stepper-header', className)
  }, /*#__PURE__*/React.createElement(StepList, {
    steps: steps,
    activeKey: activeKey
  }));
}
StepperHeader.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent: PropTypes.elementType,
  /** The max width in which the compact view of the header will switch to display the step number that is
   * currently in progress. Options include 'xs', 'sm', 'md', 'lg', 'xl', and 'xxl'.
   */
  compactWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
};
StepperHeader.defaultProps = {
  className: null,
  PageCountComponent: PageCount,
  compactWidth: 'sm'
};
StepList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    eventKey: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    hasError: PropTypes.bool
  })),
  activeKey: PropTypes.string.isRequired
};
StepList.defaultProps = {
  steps: []
};
StepperHeader.Step = StepperHeaderStep;
export default StepperHeader;
//# sourceMappingURL=StepperHeader.js.map