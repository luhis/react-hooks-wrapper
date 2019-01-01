import * as React from "react";
import * as renderer from "react-test-renderer";
import { FunctionComponent } from "react";

import { effectWrapper, stateWrapper, setState, Compose, TupleToObject, Func } from "../src/Index";

type SetVal = setState<number>;
type Props = { count: number, setCount: SetVal };

const CounterWithDocumentTitleUpdate: React.FunctionComponent<Props> = ({ count, setCount }) =>
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;

const effectFuc: (props: Props) => void = ({ count }) => {
    document.title = `You clicked ${count} times`;
};

const mapTuple: TupleToObject<number, SetVal, Props> = ([count, setCount]: [number, SetVal]) => ({ count, setCount });
const s: Func<FunctionComponent<Props>, FunctionComponent<{}>> = stateWrapper(1 as number, mapTuple);
const e: Func<FunctionComponent<Props>, FunctionComponent<Props>> = effectWrapper(effectFuc);

const Container: React.FunctionComponent<{}> = Compose(s, e)(CounterWithDocumentTitleUpdate);

test("EffectWrapper should", () => {
    const myComponent = renderer.create(<Container/>).toJSON();
    expect(myComponent).toBeTruthy();
}); 