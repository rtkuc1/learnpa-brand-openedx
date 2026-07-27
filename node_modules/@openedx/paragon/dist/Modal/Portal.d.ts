import React from 'react';
interface Props {
    children: React.ReactNode;
}
declare class Portal extends React.Component<Props> {
    private rootName;
    private rootElement;
    constructor(props: Props);
    render(): React.ReactPortal | null;
}
export default Portal;
