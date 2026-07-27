import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
const TOAST_ROOT_ID = 'toast-root';
function ToastContainer({
  children
}) {
  const [rootElement, setRootElement] = useState(null);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      let existingElement = document.getElementById(TOAST_ROOT_ID);
      if (!existingElement) {
        existingElement = document.createElement('div');
        existingElement.id = TOAST_ROOT_ID;
        existingElement.className = 'toast-container';
        document.body.appendChild(existingElement);
      }
      setRootElement(existingElement);
    }
  }, []);
  return rootElement ? /*#__PURE__*/ReactDOM.createPortal(children, rootElement) : null;
}
export default ToastContainer;
//# sourceMappingURL=ToastContainer.js.map