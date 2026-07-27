import { ReactNode } from 'react';
interface ToastContainerProps {
    children: ReactNode;
}
declare function ToastContainer({ children }: ToastContainerProps): import("react").ReactPortal | null;
export default ToastContainer;
