import * as React from "react";

import { stateWrapper } from "hookly";
import { SetState } from "hookly/dist/StateWrapper";

type Props = { count: number, name: string } & { setCount: SetState<number> };

const Counter: React.FunctionComponent<Props> = ({ count, setCount, name }) =>
  <div>
    <p>Hi {name}, You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
  </div>;

export default stateWrapper(1, ([count, setCount]) => ({ count, setCount }))(Counter);