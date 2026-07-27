import React, { createContext } from 'react';
const CardContext = /*#__PURE__*/createContext({
  orientation: 'vertical',
  isLoading: false,
  variant: 'light'
});
function CardContextProvider({
  orientation = 'vertical',
  children,
  isLoading = false,
  variant = 'light'
}) {
  return /*#__PURE__*/React.createElement(CardContext.Provider, {
    value: {
      orientation,
      isLoading,
      variant
    }
  }, children);
}
export { CardContextProvider };
export default CardContext;
//# sourceMappingURL=CardContext.js.map