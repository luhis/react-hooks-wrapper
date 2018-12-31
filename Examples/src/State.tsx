import * as React from "react";

import { stateWrapper, setState } from "hookly";

type FinalComponentProps = { name: string };
type Props = FinalComponentProps & { count: number } & { setCount: setState<number> };

const Counter: React.FunctionComponent<Props> = ({ count, setCount, name }) =>
  <div>
    <p>Hi {name}, You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
  </div>;

const CounterContainer: React.ComponentType<FinalComponentProps>
  = stateWrapper(1, ([count, setCount]) =>
    ({ count, setCount }))(Counter);

export default CounterContainer;