import { useEffect, SFC, ReactElement } from 'react'

const a = <TProps extends {}> (effectFuc: (props: TProps) => null) => (component: SFC<TProps>) => (props: TProps): ReactElement<TProps> => {
    useEffect(() => effectFuc(props));
    return component(props);
}

export default a;