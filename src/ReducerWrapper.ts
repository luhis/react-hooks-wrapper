import { FunctionComponent, ReactNode, Reducer, useReducer } from "react";

import { Omit, ReconstituteProps, TupleToObject } from "./TypeFunctions";

export default
    <TState extends object, TTransformed extends object, TAction extends object>
        (reducer: Reducer<TState, TAction>,
         initialState: TState,
         mapTupleToProps: TupleToObject<TState, TAction, TTransformed>,
         initialAction?: TAction) =>
        <P extends TTransformed>(component: FunctionComponent<P>) => {
            const ReducerWrapper =  (props: Omit<P, keyof TTransformed> & { readonly children?: ReactNode }) => {
                const transformed = mapTupleToProps(useReducer(reducer, initialState, initialAction));
                const finalProps = ReconstituteProps(props, transformed);
                return component(finalProps);
            };

            return ReducerWrapper;
        };
