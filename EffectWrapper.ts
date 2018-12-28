import { useEffect, FunctionComponent } from "react";

type EffectResponse = void | (() => void);

type TypeDef = <TProps = {}>
    (effectFuc: (props: TProps) => EffectResponse) =>
    (component: FunctionComponent<TProps>) => FunctionComponent<TProps>;

const EffectWrapper: TypeDef =
    effectFuc =>
        component =>
            props => {
                useEffect(() => effectFuc(props));
                return component(props);
            };

export default EffectWrapper;