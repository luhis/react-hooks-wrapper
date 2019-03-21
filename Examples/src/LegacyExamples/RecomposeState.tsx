import React from "react";
import { withState } from "recompose";

interface IBodyProps { readonly name: string; readonly count: number; readonly setCount: ((_: number) => number); }

const Body: React.FunctionComponent<IBodyProps> =
    ({ name, count, setCount }) =>
        (<div>
            <h2>Hi {name}, You clicked {count} times</h2>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>);

const Container = withState("count", "setCount", 0)(Body);

export default Container;
