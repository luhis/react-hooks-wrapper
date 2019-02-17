import { createElement, FunctionComponent, ReactNode, useEffect } from "react";

type EffectResponse = void | (() => void);

export default
    <TProps extends object>(effectFuc: (props: TProps) => EffectResponse, inputs?: ReadonlyArray<any> | undefined) =>
        (component: FunctionComponent<TProps>) => {
            const EffectWrapper =  (props: TProps & { readonly children?: ReactNode } ) => {
                useEffect(() => effectFuc(props), inputs);
                return createElement(component, props);
            };

            return EffectWrapper;
        };
