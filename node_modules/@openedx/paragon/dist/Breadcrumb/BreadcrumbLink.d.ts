import React from 'react';
interface BreadcrumbLinkProps {
    as: React.ElementType;
    clickHandler?: (event: React.MouseEvent, link: any) => void;
    linkProps: {
        label: string;
        url?: string;
        className?: string;
        [key: string]: any;
    };
}
export default function BreadcrumbLink({ as, clickHandler, linkProps }: BreadcrumbLinkProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
