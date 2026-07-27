import { ReactNode } from 'react';
export declare const PAGE_BANNER_DISMISS_ALT_TEXT = "Dismiss";
export declare const VARIANTS: {
    readonly light: "light";
    readonly dark: "dark";
    readonly warning: "warning";
    readonly accentA: "accentA";
    readonly accentB: "accentB";
};
interface PageBannerProps {
    /** An element rendered inside the `Page Banner`. */
    children: ReactNode;
    /** Boolean used to control whether `Page Banner` is dismissible. */
    dismissible: boolean;
    /** An element to be set as the dismiss button's alt text (preferably a translated string). */
    dismissAltText: string;
    /** A function to be called on dismiss of the `Page Banner`. */
    onDismiss: () => void;
    /** Boolean used to control whether the Page Banner shows. */
    show: boolean;
    /** A string designating which color variant of the `Page Banner` to display.
     * The full list of variants can be seen [here.](https://github.com/openedx/paragon/blob/release-23.x/src/PageBanner/index.tsx)
     */
    variant: keyof typeof VARIANTS;
}
declare function PageBanner({ children, dismissible, dismissAltText, onDismiss, show, variant, ...rest }: PageBannerProps): import("react/jsx-runtime").JSX.Element | null;
export default PageBanner;
