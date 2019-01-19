import React from "react";

interface IProps { readonly name: string; }
type IBodyProps = IProps & { readonly count: number; readonly setCount: ((_: number) => void); };

const Body: React.FunctionComponent<IBodyProps> =
    ({ name, count, setCount }) =>
        <div>
            <h1>Hello, world!</h1>
            <h2>Hi {name}, You clicked {count} times</h2>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>;

class Container extends React.Component<IProps, { readonly count: number; }> {
    constructor(props: IProps) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const setCount = (c: number) => this.setState({ ...this.state, count: c });
        const ps = {...this.props, ...this.state, setCount};
        return <Body {...ps}/>;
    }
}

export default Container;
