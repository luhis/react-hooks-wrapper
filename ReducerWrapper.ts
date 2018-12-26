import { FunctionComponent, ReactElement, Dispatch, useReducer, Reducer } from "react";

type TypeDef = <TState extends {}, TTransformed extends {}, TAction extends {}>
    (reducer: Reducer<TState, TAction>, initialState: TState, mapTupleToProps: ((tup: [TState, Dispatch<TAction>]) => TTransformed), initialAction: TAction | null) =>
    <TProps = {}>(component: FunctionComponent<TProps & TTransformed>) =>
        (props: TProps) => (ReactElement<TProps & TTransformed> | null);

const StateWrapper: TypeDef =
    (reducer, initialState, mapTupleToProps, initialAction) =>
        component =>
            props =>
                component({ ...props, ...mapTupleToProps(useReducer(reducer, initialState, initialAction)) });

export default StateWrapper;
