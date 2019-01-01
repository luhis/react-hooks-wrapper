import * as React from "react";
import * as renderer from "react-test-renderer";

import { effectWrapper, setState, stateWrapper, TupleToObject } from "../src/Index";

type SetVal = setState<number>;
interface IProps { readonly count: number; readonly setCount: SetVal; }

const CounterWithDocumentTitleUpdate: React.FunctionComponent<IProps> = ({ count, setCount }) =>
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;

const effectFuc: (props: IProps) => void = ({ count }) => {
    document.title = `You clicked ${count} times`;
};

const mapTuple: TupleToObject<number, SetVal, IProps> = ([count, setCount]: [number, SetVal]) => ({ count, setCount });

const Container: React.FunctionComponent = 
    stateWrapper(1 as number, mapTuple)(effectWrapper(effectFuc)(CounterWithDocumentTitleUpdate));

test("EffectWrapper should", () => {
    const myComponent = renderer.create(<Container/>).toJSON();
    expect(myComponent).toBeTruthy();
});