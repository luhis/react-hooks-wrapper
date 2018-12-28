import { useState, FunctionComponent } from "react";

import SetState from "./SetState";
import { Omit } from "./TypeFunctions";

type TypeDef = <TState extends {}, TTransformed extends {}, TNeedsProps extends {}>
    (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof (TTransformed)> & TNeedsProps>;

const StateWrapper: TypeDef =
    <TState, TTransformed>
        (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
        <P>(component: FunctionComponent<P>) =>
            props => {
                const finalProps: P = { ...props, ...mapTupleToProps(useState(defaultVal)) } as unknown as P;
                return component(finalProps);
            };
export default StateWrapper;
