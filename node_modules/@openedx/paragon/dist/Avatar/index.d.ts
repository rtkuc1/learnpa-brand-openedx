import React from 'react';
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Alt text. Usually the user's name */
    alt?: string;
    /** Size of the avatar */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge';
    /** Image src of the avatar image */
    src?: string;
}
declare function Avatar({ alt, size, src, ...attrs }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export default Avatar;
