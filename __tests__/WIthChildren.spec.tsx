import * as React from "react";
import * as renderer from "react-test-renderer";

import { setState, stateWrapper } from "../src/Index";

interface IFinalComponentProps { readonly name: string; readonly children?: React.ReactNode; }
type Props = IFinalComponentProps & { readonly count: number; readonly setCount: setState<number> };

const Counter: React.FunctionComponent<Props> = ({ count, setCount, name, children }) =>
    <div>
        <p>Hi {name}, You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
      {children}
    </div>;

const CounterContainer: React.FunctionComponent<IFinalComponentProps>
    = stateWrapper(1, ([count, setCount]) => ({ count, setCount }))(Counter);

test("WithChildren should", () => {
    const myComponent = renderer.create(
    <CounterContainer name="matt">
        <span>hello world</span>
        <span>hello world 2</span>
    </CounterContainer>).toJSON();
    expect(myComponent).toMatchSnapshot();
});
