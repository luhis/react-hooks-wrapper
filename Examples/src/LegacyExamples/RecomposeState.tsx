import React from "react";
import { withState } from "recompose";

interface IState { readonly count: number; }
interface IBodyProps { readonly name: string; readonly state: IState; readonly setCount: ((_: IState) => IState); }

const Body: React.FunctionComponent<IBodyProps> =
    ({ name, state, setCount }) =>
        <div>
            <h1>Hello, world!</h1>
            <h2>Hi {name}, You clicked {state} times</h2>
            <button onClick={() => setCount({ ...state, count: state.count + 1 })}>
                Click me
            </button>
        </div>;

const Container = withState("state", "setCount", { count: 0 })(Body);

export default Container;
