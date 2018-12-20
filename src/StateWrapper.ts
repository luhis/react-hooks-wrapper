import { useState, SFC, ReactElement, Dispatch, SetStateAction } from 'react'

const StateWrapper =
    <TProps extends {}, TState extends {}, TTransformed extends {}>
        (defaultVal: TState, mapTupleToProps: ((tup: [TState, Dispatch<SetStateAction<TState>>]) => TTransformed)) =>
        (component: SFC<TProps & TTransformed>) =>
            (props: TProps): ReactElement<TProps & TTransformed> =>
                component({ ...props, ...mapTupleToProps(useState(defaultVal)) });

export default StateWrapper