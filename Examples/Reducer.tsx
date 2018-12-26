import * as React from "react";

import { reducerWrapper } from "hookly";

type Props = { count: number, name: string } & { dispatch: React.Dispatch<Action> };

type Action = 'increment' | 'decrement' | 'reset';

const reducer: React.Reducer<number, Action> = (state, action) => {
    switch (action) {
      case 'reset':
        return 0;
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        // A reducer must always return a valid state.
        // Alternatively you can throw an error if an invalid action is dispatched.
        return state;
    }
  }

const Counter: React.FunctionComponent<Props> = ({ count, dispatch, name }) =>
  <div>
    <p>Hi {name}, You clicked {count} times</p>
    <button onClick={() => dispatch('increment')}>
      Click me
      </button>
  </div>;

export default reducerWrapper(reducer, 1, ([count, dispatch]) => ({ count, dispatch }))(Counter);