/* eslint no-console: 0 */
import React from 'react';
export let DeprTypes = /*#__PURE__*/function (DeprTypes) {
  DeprTypes["MOVED"] = "MOVED";
  DeprTypes["REMOVED"] = "REMOVED";
  DeprTypes["FORMAT"] = "FORMAT";
  DeprTypes["MOVED_AND_FORMAT"] = "MOVED_AND_FORMAT";
  return DeprTypes;
}({});
function withDeprecatedProps(WrappedComponent, componentName, deprecatedProps) {
  class WithDeprecatedProps extends React.Component {
    // eslint-disable-next-line react/static-property-placement
    static displayName = `withDeprecatedProps(${componentName})`;
    constructor(props) {
      super(props);
      this.transformProps = this.transformProps.bind(this);
    }
    warn(message) {
      if (process.env.NODE_ENV === 'development') {
        if (console) {
          console.warn(`[Deprecated] ${message}`);
        }
      }
    }
    transformProps(acc, propName) {
      if (deprecatedProps[propName] === undefined) {
        acc[propName] = this.props[propName];
        return acc;
      }
      const {
        deprType,
        newName,
        expect,
        transform,
        message
      } = deprecatedProps[propName];
      switch (deprType) {
        case DeprTypes.MOVED:
          this.warn(`${componentName}: The prop '${propName}' has been moved to '${newName}'.`);
          acc[newName] = this.props[propName];
          break;
        case DeprTypes.REMOVED:
          this.warn(`${componentName}: The prop '${propName}' has been removed. '${message}'`);
          break;
        case DeprTypes.FORMAT:
          if (!expect(this.props[propName])) {
            this.warn(`${componentName}: The prop '${propName}' expects a new format. ${message}`);
            acc[propName] = transform(this.props[propName], this.props);
          } else {
            acc[propName] = this.props[propName];
          }
          break;
        case DeprTypes.MOVED_AND_FORMAT:
          {
            const propValue = this.props[propName];
            let warningMessage = `${componentName}: The prop '${propName}' has been moved to '${newName}'`;
            if (expect && !expect(propValue)) {
              warningMessage += ' and expects a new format';
            }
            warningMessage += message ? `. ${message}` : '';
            this.warn(warningMessage);
            acc[newName] = transform ? transform(propValue, this.props) : propValue;
            break;
          }
        default:
          acc[propName] = this.props[propName];
          break;
      }
      return acc;
    }
    render() {
      const {
        children,
        ...transformedProps
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /*#__PURE__*/React.createElement(WrappedComponent, {
        ...transformedProps
      }, this.props.children || children);
    }
  }
  return WithDeprecatedProps;
}
export default withDeprecatedProps;
//# sourceMappingURL=withDeprecatedProps.js.map