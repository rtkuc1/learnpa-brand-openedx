import React from 'react';
import { type SpinnerProps as BaseSpinnerProps } from 'react-bootstrap/Spinner';
interface SpinnerProps extends BaseSpinnerProps {
    /** Optionally specify additional CSS classes to give this spinner's `<div>`. */
    className?: string;
    /** Specifies the screen reader content for a11y. */
    screenReaderText?: React.ReactNode;
}
/** A spinning animation that indicates loading. */
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
export default Spinner;
