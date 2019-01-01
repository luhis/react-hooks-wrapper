import { FunctionComponent, useEffect } from "react";

type EffectResponse = void | (() => void);

type TypeDef = <TProps extends object>
    (effectFuc: (props: TProps) => EffectResponse) =>
    (component: FunctionComponent<TProps>) => FunctionComponent<TProps>;

const EffectWrapper: TypeDef =
    (effectFuc) =>
        (component) =>
            (props) => {
                useEffect(() => effectFuc(props));
                return component(props);
            };

export default EffectWrapper;
