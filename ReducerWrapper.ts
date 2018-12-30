import { FunctionComponent, Dispatch, useReducer, Reducer, ReactNode } from "react";

import { Omit, ReconstituteFunctionComponent } from "./TypeFunctions";

type TypeDef = <TState extends {}, TTransformed extends {}, TAction extends {}, TNeedsProps extends {}>
    (reducer: Reducer<TState, TAction>,
    initialState: TState, mapTupleToProps: ((tup: [TState, Dispatch<TAction>]) => TTransformed),
    initialAction?: TAction) =>
    <P extends TTransformed >(component: FunctionComponent<P>) => FunctionComponent<Omit<P, keyof (TTransformed)> & TNeedsProps>;

const StateWrapper: TypeDef =
    <TState extends {}, TTransformed extends {}, TAction extends {}, TNeedsProps extends {}>
        (reducer: Reducer<TState, TAction>,
            initialState: TState,
            mapTupleToProps: ((tup: [TState, Dispatch<TAction>]) => TTransformed),
            initialAction?: TAction) =>
        <P extends TTransformed>(component: FunctionComponent<P>) =>
            (props: Omit<P, keyof (TTransformed)> & TNeedsProps & { children?: ReactNode }) => {
                return component(ReconstituteFunctionComponent(props, mapTupleToProps(useReducer(reducer, initialState, initialAction))));
            };

export default StateWrapper;
