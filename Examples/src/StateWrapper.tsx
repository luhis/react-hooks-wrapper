import { createElement, FunctionComponent, ReactNode, useState } from "react";

import { Omit, ReconstituteProps } from "hookly";

export type TupleToObject<TLeft, TRight, TOut extends object> = (_: [TLeft, (_: TRight) => void]) => TOut;

const StateWrapper =
    <TState, TTransformed extends object>
        (defaultVal: TState, mapTupleToProps: TupleToObject<TState, TState, TTransformed>) =>
        <P extends TTransformed>(X: FunctionComponent<P>) => {
            const StateContainer = (props: Omit<P, keyof TTransformed> & { readonly children?: ReactNode }) => {
                const finalProps = ReconstituteProps(props, mapTupleToProps(useState(defaultVal)));
                return createElement(X, finalProps);
            };

            return StateContainer;
        };

export default StateWrapper;
