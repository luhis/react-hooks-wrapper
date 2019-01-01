import * as React from "react";
import * as renderer from "react-test-renderer";

import { reducerWrapper } from "../src/Index";

type State = { count: number };

type FinalProps = { name: string };

type Props = FinalProps & { state: State } & { dispatch: React.Dispatch<Action> };

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const reducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case "reset":
            return { count: 0 };
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const Counter: React.FunctionComponent<Props> = ({ state, dispatch, name }) =>
    <div>
        <p>Hi {name}, You clicked {state.count} times</p>
        <button onClick={() => dispatch({ type: "increment" })}>
            Click me
        </button>
    </div>;

const Container: React.FunctionComponent<FinalProps> = reducerWrapper(reducer, { count: 0 }, ([state, dispatch]) =>
    ({ state, dispatch }))(Counter);

test("ReducerWrapper should", () => {
    const myComponent = renderer.create(<Container name="matt" />).toJSON();
    expect(myComponent).toBeTruthy();
});