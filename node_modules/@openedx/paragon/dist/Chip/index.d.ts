import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import { STYLE_VARIANTS } from './constants';
export declare const CHIP_PGN_CLASS = "pgn__chip";
export interface IChip {
    /** Specifies the content of the `Chip`. */
    children: React.ReactNode;
    /** Click handler for the whole `Chip`, has effect only when Chip does not have any interactive icons. */
    onClick?: KeyboardEventHandler & MouseEventHandler;
    /** Specifies an additional `className` to add to the base element. */
    className?: string;
    /** The `Chip` style [variant](https://github.com/openedx/paragon/blob/release-23.x/src/Chip/constants.ts) to use. */
    variant?: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS];
    /**
     * An icon component to render before the content.
     * Example import of a Paragon icon component:
     *
     * `import { Check } from '@openedx/paragon/icons';`
     */
    iconBefore?: React.ComponentType;
    /** Specifies icon alt text. */
    iconBeforeAlt?: string;
    /**
     * An icon component to render before after the content.
     * Example import of a Paragon icon component:
     *
     * `import { Check } from '@openedx/paragon/icons';`
     */
    iconAfter?: React.ComponentType;
    /** Specifies icon alt text. */
    iconAfterAlt?: string;
    /** A click handler for the `Chip` icon before. */
    onIconBeforeClick?: KeyboardEventHandler & MouseEventHandler;
    /** A click handler for the `Chip` icon after. */
    onIconAfterClick?: KeyboardEventHandler & MouseEventHandler;
    /** Disables the `Chip`. */
    disabled?: boolean;
    /** Indicates if `Chip` has been selected. */
    isSelected?: boolean;
}
declare const Chip: React.ForwardRefExoticComponent<IChip & React.RefAttributes<HTMLDivElement>>;
export default Chip;
