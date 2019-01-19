import React from "react";

interface IState { readonly count: number; }
interface IProps { readonly name: string; }
type IBodyProps = IProps & { readonly state: IState; readonly setState: ((_: IState) => void); };

const Body: React.FunctionComponent<IBodyProps> =
    ({ name, state, setState }) =>
        <div>
            <h1>Hello, world!</h1>
            <h2>Hi {name}, You clicked {state.count} times</h2>
            <button onClick={() => setState({ ...state, count: state.count + 1 })}>
                Click me
            </button>
        </div>;

class Container extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const ps = {...this.props, state: this.state, setState: this.setState};
        return <Body {...ps}/>;
    }
}

export default Container;
