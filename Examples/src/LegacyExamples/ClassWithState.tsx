import React from "react";

interface IProps { readonly name: string; }

class ClassWithState extends React.Component<IProps, { readonly count: number }> {
    constructor(props: IProps) {
        super(props);
        this.state = { count: 0 };
    }
    public render(): JSX.Element {
        const { name } = this.props;
        const { count } = this.state;
        const setCount = (c: number) => this.setState({ ...this.state, count: c });
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>Hi {name}, You clicked {count} times</h2>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }
}

export default ClassWithState;
