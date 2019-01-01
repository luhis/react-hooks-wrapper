import * as React from "react";
import * as renderer from "react-test-renderer";

import { setState, stateWrapper } from "../src/Index";

interface IFinalComponentProps { readonly name: string; }
type Props = IFinalComponentProps & { readonly count: number } & { readonly setCount: setState<number> };

const Counter: React.FunctionComponent<Props> = ({ count, setCount, name }) =>
    <div>
        <p>Hi {name}, You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;

const CounterContainer: React.ComponentType<IFinalComponentProps>
    = stateWrapper(1, ([count, setCount]) =>
        ({ count, setCount }))(Counter);

test("StateWrapper should", () => {
    const myComponent = renderer.create(<CounterContainer name="matt"/>).toJSON();
    expect(myComponent).toBeTruthy();
});
