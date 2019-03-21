import * as React from "react";

interface IState { readonly count: number; }

interface IFinalProps { readonly name: string; }

type Action = { readonly type: "increment" } | { readonly type: "decrement" } | { readonly type: "reset" };

const reducer: React.Reducer<IState, Action> = (state, action) => {
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

export const Counter: React.FunctionComponent<IFinalProps> = ({ name }) => {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
    return (<div>
        <p>Hi {name}, You clicked {state.count} times</p>
        <button onClick={() => dispatch({ type: "increment" })}>
            Click me
      </button>
    </div>);
};

export default Counter;
