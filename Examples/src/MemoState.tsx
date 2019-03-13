import { setState, stateWrapper } from "hookly";
import * as React from "react";

interface IProps {
    readonly count: number;
    readonly name: string;
    readonly setCount: setState<number>;
}

const Counter: React.FunctionComponent<IProps> = ({ count, setCount, name }) =>
    <div>
        <p>Hi {name}, You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;

const CounterContainer = stateWrapper(([count, setCount]) =>
    ({ count, setCount }), 1)(React.memo(Counter));

export default CounterContainer;
