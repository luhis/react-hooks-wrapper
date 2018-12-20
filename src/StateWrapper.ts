import { useState, FunctionComponent, ReactElement, Dispatch, SetStateAction } from "react";

export type SetState<T extends {}> = Dispatch<SetStateAction<T>>;

const StateWrapper =
    <TState extends {}, TTransformed = {}>
        (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
        <TProps = {}>(component: FunctionComponent<TProps & TTransformed>) =>
            (props: TProps): (ReactElement<TProps & TTransformed> | null) =>
                component({ ...props, ...mapTupleToProps(useState(defaultVal)) });

export default StateWrapper;