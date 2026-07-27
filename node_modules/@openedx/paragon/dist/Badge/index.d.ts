import React from 'react';
import { ComponentWithAsProp } from '../utils/types/bootstrap';
declare const STYLE_VARIANTS: string[];
interface BadgeProps {
    /** Specifies element type for this component */
    as?: React.ElementType;
    /** Visual style of the badge. The full type definition can be seen [here](https://github.com/openedx/paragon/blob/release-23.x/src/Badge/index.tsx) */
    variant?: typeof STYLE_VARIANTS[number];
    /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
    pill?: boolean;
    /** Overrides underlying component base CSS class name */
    bsPrefix?: string;
}
declare const Badge: ComponentWithAsProp<'span', BadgeProps>;
export default Badge;
