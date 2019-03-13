import { reducerWrapper } from "hookly";
import * as React from "react";

interface IState { readonly count: number; }

interface IFinalProps { readonly name: string; }

type Props = IFinalProps & { readonly state: IState } & { readonly dispatch: React.Dispatch<Action> };

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

const Counter: React.FunctionComponent<Props> = ({ state, dispatch, name }) =>
    <div>
        <p>Hi {name}, You clicked {state.count} times</p>
        <button onClick={() => dispatch({ type: "increment" })}>
            Click me
      </button>
    </div>;

const Container: React.FunctionComponent<IFinalProps> = reducerWrapper(([state, dispatch]) =>
    ({ state, dispatch }), reducer, { count: 0 })(Counter);

export default Container;
