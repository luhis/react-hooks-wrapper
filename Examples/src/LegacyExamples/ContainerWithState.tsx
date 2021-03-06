import React from "react";

interface IProps { readonly name: string; }
type IBodyProps = IProps & { readonly count: number; readonly setCount: ((_: number) => void); };

const Body: React.FunctionComponent<IBodyProps> =
    ({ name, count, setCount }) =>
        (<div>
            <h2>Hi {name}, You clicked {count} times</h2>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>);

class Container extends React.Component<IProps, { count: number}> {
    constructor(props: IProps) {
        super(props);
        this.state = { count: 0};
    }
    public render(): JSX.Element {
        const ps = {...this.props, count: this.state.count, setCount: (c: number) => this.setState(state => ({...state, count: c}))};
        return <Body {...ps}/>;
    }
}

export default Container;
