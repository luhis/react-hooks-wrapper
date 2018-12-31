import { useState, FunctionComponent, ReactNode } from "react";

import SetState from "./SetState";
import { Omit, ReconstituteFunctionComponent, TupleToObject } from "./TypeFunctions";

type TypeDef = <TState extends object, TTransformed extends object, TNeedsProps extends object>
    (defaultVal: TState, mapTupleToProps: TupleToObject<[TState, SetState<TState>], TTransformed>) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof (TTransformed)> & TNeedsProps>;

const StateWrapper: TypeDef =
    <TState extends object, TTransformed extends object, TNeedsProps extends object>
        (defaultVal: TState, mapTupleToProps: TupleToObject<[TState, SetState<TState>], TTransformed>) =>
        <P extends TTransformed>(component: FunctionComponent<P>) =>
            (props: Omit<P, keyof (TTransformed)> & TNeedsProps & { children?: ReactNode }) => {
                const finalProps: P = ReconstituteFunctionComponent(props, mapTupleToProps(useState(defaultVal)));
                return component(finalProps);
            };
export default StateWrapper;
