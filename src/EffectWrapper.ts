import { createElement, FunctionComponent, ReactNode, useEffect } from "react";

type EffectResponse = void | (() => void);

export default
    <TProps extends object>(effectFuc: (props: TProps) => EffectResponse) =>
        (component: FunctionComponent<TProps>) => {
            const EffectWrapper =  (props: TProps & { readonly children?: ReactNode } ) => {
                useEffect(() => effectFuc(props));
                return createElement(component, props);
            };

            return EffectWrapper;
        };
