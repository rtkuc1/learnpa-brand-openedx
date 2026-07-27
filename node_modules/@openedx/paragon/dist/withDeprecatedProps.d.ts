import React from 'react';
export declare enum DeprTypes {
    MOVED = "MOVED",
    REMOVED = "REMOVED",
    FORMAT = "FORMAT",
    MOVED_AND_FORMAT = "MOVED_AND_FORMAT"
}
export interface DeprecatedProps extends Record<string, any> {
    deprType: DeprTypes;
    newName?: string;
    expect?: (propValue: any) => boolean;
    transform?: (propValue: any, allProps: Record<string, any>) => any;
    message?: string;
}
declare function withDeprecatedProps<T extends Record<string, any>>(WrappedComponent: React.ComponentType<any>, componentName: string, deprecatedProps: Record<string, DeprecatedProps>): any;
export default withDeprecatedProps;
