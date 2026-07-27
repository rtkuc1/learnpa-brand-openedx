import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { Launch } from '../../icons';
import Icon from '../Icon';
const messages = defineMessages({
  externalLinkAltText: {
    id: 'Hyperlink.externalLinkAltText',
    defaultMessage: 'in a new tab'
  },
  externalLinkTitle: {
    id: 'Hyperlink.externalLinkTitle',
    defaultMessage: 'Opens in a new tab'
  }
});
const Hyperlink = /*#__PURE__*/forwardRef(({
  as: Component = 'a',
  className,
  destination,
  children,
  target = '_self',
  onClick,
  externalLinkAlternativeText,
  externalLinkTitle,
  variant = 'default',
  isInline = false,
  showLaunchIcon = true,
  ...attrs
}, ref) => {
  const intl = useIntl();
  let externalLinkIcon;
  if (target === '_blank') {
    const generateRel = () => {
      let {
        rel
      } = attrs;
      if (!rel) {
        return 'noopener noreferrer';
      }
      if (!rel.includes('noopener')) {
        rel += ' noopener';
      }
      if (!rel.includes('noreferrer')) {
        rel += ' noreferrer';
      }
      return rel;
    };

    // Add this rel attribute to prevent Reverse Tabnabbing
    attrs.rel = generateRel();
    if (showLaunchIcon) {
      externalLinkIcon = /*#__PURE__*/React.createElement("span", {
        className: "pgn__hyperlink__external-icon",
        title: externalLinkTitle || intl.formatMessage(messages.externalLinkTitle)
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Launch,
        screenReaderText: externalLinkAlternativeText || intl.formatMessage(messages.externalLinkAltText),
        style: {
          height: '1em',
          width: '1em'
        },
        "data-testid": "hyperlink-icon"
      }));
    }
  }
  const additionalProps = {
    ...attrs
  };
  if (destination) {
    additionalProps.href = destination;
  }
  return /*#__PURE__*/React.createElement(Component, {
    ref: ref,
    className: classNames('pgn__hyperlink', `${variant}-link`, {
      'standalone-link': !isInline,
      'inline-link': isInline
    }, className),
    target: target,
    onClick: onClick,
    ...additionalProps
  }, children, externalLinkIcon);
});
Hyperlink.displayName = 'Hyperlink';
export default Hyperlink;
//# sourceMappingURL=index.js.map