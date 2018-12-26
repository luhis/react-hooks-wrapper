import * as React from "react";
import { reducerWrapper } from "hookly";

type State = { count: number };

type Props = { state: State, name: string } & { dispatch: React.Dispatch<Action> };

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

export default reducerWrapper(reducer, { count: 0 }, ([state, dispatch]) => ({ state, dispatch }))(Counter);