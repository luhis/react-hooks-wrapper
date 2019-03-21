import React from "react";

interface IProps { readonly name: string; }

class ClassWithState extends React.Component<IProps, { count: number}> {
    constructor(props: IProps) {
        super(props);
        this.state = { count: 0};
    }
    public render(): JSX.Element {
        const { name } = this.props;
        return (
            <div>
                <h2>Hi {name}, You clicked {this.state.count} times</h2>
                <button onClick={() => this.setState(s => ({...s, count: s.count + 1 }))}>
                    Click me
                </button>
            </div>
        );
    }
}

export default ClassWithState;
