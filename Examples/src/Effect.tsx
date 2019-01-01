import { effectWrapper, setState, stateWrapper } from "hookly";
import * as React from "react";

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

const mapTuple = ([count, setCount]: [number, SetVal]) => ({ count, setCount });

export default stateWrapper(1 as number, mapTuple)(effectWrapper(effectFuc)(CounterWithDocumentTitleUpdate));
