import * as React from "react";

import { effectWrapper, stateWrapper, setState } from "../Index";

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

const mapTuple: (tup: [number, SetVal]) => Props = ([count, setCount]: [number, SetVal]) => ({ count, setCount });

const stateContainer = stateWrapper(1 as number, mapTuple)(effectWrapper(effectFuc)(CounterWithDocumentTitleUpdate));

test("StateWrapper should", () => {
    const sut = stateContainer({  });
    expect(sut).toBeTruthy();
});