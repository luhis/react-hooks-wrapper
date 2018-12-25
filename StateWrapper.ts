import { useState, FunctionComponent, ReactElement, Dispatch, SetStateAction } from "react";

export type SetState<T extends {}> = Dispatch<SetStateAction<T>>;

type TypeDef = <TState extends {}, TTransformed = {}>
    (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
    <TProps = {}>(component: FunctionComponent<TProps & TTransformed>) =>
        (props: TProps) => (ReactElement<TProps & TTransformed> | null);

const StateWrapper: TypeDef =
    (defaultVal, mapTupleToProps) =>
        component =>
            props =>
                component({ ...props, ...mapTupleToProps(useState(defaultVal)) });

export default StateWrapper;