import React from 'react';
import { type Placement } from 'react-bootstrap/Overlay';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Component that renders the icon, currently defaults to `Icon` */
    iconAs?: React.ComponentType<any>;
    /** Additional CSS class[es] to apply to this button */
    className?: string;
    /** Alt text for your icon. For best practice, avoid using alt text to describe
     * the image in the `IconButton`. Instead, we recommend describing the function
     * of the button. */
    alt: string;
    /** Changes icon styles for dark background */
    invertColors?: boolean;
    /** An icon component to render. Example import of a Paragon icon component:
     * `import { Check } from '@openedx/paragon/icons';`
     * */
    src?: React.ComponentType;
    /** Extra class names that will be added to the icon */
    iconClassNames?: string;
    /** Click handler for the button */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Whether to show the `IconButton` in an active state, whose styling is distinct from default state */
    isActive?: boolean;
    /** @deprecated Using FontAwesome icons is deprecated. Instead, pass iconAs={Icon} src={...} */
    icon?: {
        prefix?: string;
        iconName?: string;
        icon?: any[];
    };
    /** Type of button (uses Bootstrap options). */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';
    /** Size of button to render */
    size?: 'sm' | 'md' | 'inline';
    /** No children */
    children?: never;
}
interface PropsWithTooltip extends Props {
    /** Tooltip placement can be top, left, right etc, choose from https://popper.js.org/docs/v2/constructors/#options */
    tooltipPlacement?: Placement;
    /** Any content to pass to tooltip content area */
    tooltipContent: React.ReactNode;
}
/**
 * An icon button wrapped in overlaytrigger to display a tooltip.
 */
declare function IconButtonWithTooltip({ tooltipPlacement, tooltipContent, ...props }: PropsWithTooltip): import("react/jsx-runtime").JSX.Element;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>> & {
    IconButtonWithTooltip: typeof IconButtonWithTooltip;
};
export default _default;
export { IconButtonWithTooltip };
