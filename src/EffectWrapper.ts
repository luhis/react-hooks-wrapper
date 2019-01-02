import { FunctionComponent, ReactNode, useEffect } from "react";

type EffectResponse = void | (() => void);

const EffectWrapper =
    <TProps extends object>(effectFuc: (props: TProps) => EffectResponse) =>
        (component: FunctionComponent<TProps>) =>
            (props: TProps & { readonly children?: ReactNode } ) => {
                useEffect(() => effectFuc(props));
                return component(props);
            };

export default EffectWrapper;
