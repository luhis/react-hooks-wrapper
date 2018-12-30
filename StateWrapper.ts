import { useState, FunctionComponent, ReactNode } from "react";

import SetState from "./SetState";
import { Omit, ReconstituteFunctionComponent } from "./TypeFunctions";

type TypeDef = <TState extends {}, TTransformed extends {}, TNeedsProps extends {}>
    (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof (TTransformed)> & TNeedsProps>;

const StateWrapper: TypeDef =
    <TState extends {}, TTransformed extends {}, TNeedsProps extends {}>
        (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
        <P extends TTransformed>(component: FunctionComponent<P>) =>
            (props: Omit<P, keyof (TTransformed)> & TNeedsProps & { children?: ReactNode }) => {
                const finalProps: P = ReconstituteFunctionComponent(props, mapTupleToProps(useState(defaultVal)));
                return component(finalProps);
            };
export default StateWrapper;
