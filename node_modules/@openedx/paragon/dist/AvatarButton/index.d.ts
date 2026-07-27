import React from 'react';
interface AvatarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The button text */
    children?: string;
    /** A class name to append to the button */
    className?: string;
    /** Show the label or only the avatar */
    showLabel?: boolean;
    /** The button size */
    size?: 'sm' | 'md' | 'lg';
    /** Image src of the avatar image */
    src?: string;
    /** The button style variant to use */
    variant?: string;
}
declare const AvatarButton: React.ForwardRefExoticComponent<AvatarButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default AvatarButton;
