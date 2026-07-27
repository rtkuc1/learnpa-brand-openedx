import React from 'react';
interface ActionRowProps extends React.HTMLAttributes<HTMLElement> {
    /** Specifies the base element */
    as?: React.ElementType;
    /** Specifies the contents of the row */
    children: React.ReactNode;
    /** Specifies class name to append to the base element */
    className?: string;
    /** Specifies whether row should be displayed horizontally */
    isStacked?: boolean;
}
declare function ActionRow({ as, isStacked, children, ...props }: ActionRowProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace ActionRow {
    var Spacer: typeof ActionRowSpacer;
}
declare function ActionRowSpacer(): import("react/jsx-runtime").JSX.Element;
export { ActionRowSpacer };
export default ActionRow;
