import { FunctionComponent, Dispatch, useReducer, Reducer } from "react";

import { Omit } from "./TypeFunctions";

type TypeDef = <TState extends {}, TTransformed extends {}, TAction extends {}, TNeedsProps extends {}>
    (reducer: Reducer<TState, TAction>,
    initialState: TState, mapTupleToProps: ((tup: [TState, Dispatch<TAction>]) => TTransformed),
    initialAction?: TAction) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof (TTransformed)> & TNeedsProps>;

const StateWrapper: TypeDef =
    <TState, TTransformed, TAction>
        (reducer: Reducer<TState, TAction>,
            initialState: TState,
            mapTupleToProps: ((tup: [TState, Dispatch<TAction>]) => TTransformed),
            initialAction?: TAction) =>
        <P>(component: FunctionComponent<P>) =>
            props => {
                const finalProps: P = { ...props, ...mapTupleToProps(useReducer(reducer, initialState, initialAction)) } as unknown as P;
                return component(finalProps);
            };

export default StateWrapper;
