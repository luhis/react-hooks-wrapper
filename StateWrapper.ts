import { useState, FunctionComponent, ReactElement } from "react";
import SetState from "./SetState";

type TypeDef = <TState extends {}, TTransformed extends {}>
    (defaultVal: TState, mapTupleToProps: ((tup: [TState, SetState<TState>]) => TTransformed)) =>
    <TProps extends {}>(component: FunctionComponent<TProps & TTransformed>) =>
        (props: TProps) => (ReactElement<TProps & TTransformed> | null);

const StateWrapper: TypeDef =
    (defaultVal, mapTupleToProps) =>
        component =>
            props => component({ ...props, ...mapTupleToProps(useState(defaultVal)) });


export default StateWrapper;