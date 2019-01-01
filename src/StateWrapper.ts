import { FunctionComponent, ReactNode, useState } from "react";

import SetState from "./SetState";
import { Omit, ReconstituteProps, TupleToObject } from "./TypeFunctions";

type TypeDef = <TState, TTransformed extends object>
    (defaultVal: TState, mapTupleToProps: TupleToObject<TState, SetState<TState>, TTransformed>) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof TTransformed>>;

const StateWrapper: TypeDef =
    <TState, TTransformed extends object>
        (defaultVal: TState, mapTupleToProps: TupleToObject<TState, SetState<TState>, TTransformed>) =>
        <P extends TTransformed>(component: FunctionComponent<P>) =>
            (props: Omit<P, keyof TTransformed> & { readonly children?: ReactNode }) => {
                const finalProps = ReconstituteProps(props, mapTupleToProps(useState(defaultVal)));
                return component(finalProps);
            };
export default StateWrapper;
