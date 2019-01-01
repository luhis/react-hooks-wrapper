import { Dispatch, FunctionComponent, ReactNode, Reducer, useReducer } from "react";

import { Omit, ReconstituteProps, TupleToObject } from "./TypeFunctions";

type TypeDef = <TState extends object, TTransformed extends object, TAction extends object>
    (reducer: Reducer<TState, TAction>,
     initialState: TState, mapTupleToProps: TupleToObject<TState, Dispatch<TAction>, TTransformed>,
     initialAction?: TAction) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof TTransformed>>;

const ReducerWrapper: TypeDef =
    <TState extends object, TTransformed extends object, TAction extends object>
        (reducer: Reducer<TState, TAction>,
         initialState: TState,
         mapTupleToProps: TupleToObject<TState, Dispatch<TAction>, TTransformed>,
         initialAction?: TAction) =>
        <P extends TTransformed>(component: FunctionComponent<P>) =>
            (props: Omit<P, keyof TTransformed> & { readonly children?: ReactNode }) => {
                const transformed: TTransformed = mapTupleToProps(useReducer(reducer, initialState, initialAction));
                const finalProps: P = ReconstituteProps(props, transformed);
                return component(finalProps);
            };

export default ReducerWrapper;
