import * as React from "react";

import { stateWrapper, setState } from "hookly";

type Props = { count: number, name: string } & { setCount: setState<number> };

const Counter: React.FunctionComponent<Props> = ({ count, setCount, name }) =>
  <div>
    <p>Hi {name}, You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
  </div>;

export default stateWrapper(1, ([count, setCount]) => ({ count, setCount }))(Counter);