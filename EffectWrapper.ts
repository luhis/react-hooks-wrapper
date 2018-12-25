import { useEffect, ReactElement, FunctionComponent } from "react";

type EffectResponse = void | (() => void);

type TypeDef = <TProps = {}>
    (effectFuc: (props: TProps) => EffectResponse) =>
    (component: FunctionComponent<TProps>) =>
        (props: TProps) => (ReactElement<TProps> | null);

const EffectWrapper: TypeDef =
    effectFuc =>
        component =>
            props => {
                useEffect(() => effectFuc(props));
                return component(props);
            };

export default EffectWrapper;