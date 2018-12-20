import { useEffect, ReactElement, FunctionComponent } from "react";

type EffectResponse = void | (() => void);

const EffectWrapper =
    <TProps = {}>
        (effectFuc: (props: TProps) => EffectResponse) =>
        (component: FunctionComponent<TProps>) =>
        (props: TProps): (ReactElement<TProps> | null) => {
            useEffect(() => effectFuc(props));
            return component(props);
        };

export default EffectWrapper;