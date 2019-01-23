import { createElement, FunctionComponent, ReactNode } from "react";

export default
        <P>(component: FunctionComponent<P>) =>
            (props: P & { readonly children?: ReactNode }) => {
                return createElement(component, props);
            };
