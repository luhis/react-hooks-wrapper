import { FunctionComponent, ReactNode, useState } from "react";

import { Omit, ReconstituteProps, TupleToObject } from "./TypeFunctions";

export default
    <TState, TTransformed extends object>
        (defaultVal: TState, mapTupleToProps: TupleToObject<TState, TState, TTransformed>) =>
        <P extends TTransformed>(component: FunctionComponent<P>) => {
            const StateWrapper = (props: Omit<P, keyof TTransformed> & { readonly children?: ReactNode }) => {
                const finalProps = ReconstituteProps(props, mapTupleToProps(useState(defaultVal)));
                return component(finalProps);
            };

            return StateWrapper;
        };
