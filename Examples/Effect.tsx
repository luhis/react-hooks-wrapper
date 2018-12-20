import * as React from 'react';

import { effectWrapper, stateWrapper } from 'hookly';
import { SetState } from 'hookly/dist/StateWrapper';

type SetVal = SetState<number>;
type Props = { count: number, setCount: SetVal };

const CounterWithDocumentTitleUpdate: React.FunctionComponent<Props> = ({ count, setCount }) =>
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;

const effectFuc = ({ count }: Props) => {
    document.title = `You clicked ${count} times`;
}

const mapTuple = ([count, setCount]: [number, SetVal]) => ({ count, setCount });

export default stateWrapper(1 as number, mapTuple)(effectWrapper(effectFuc)(CounterWithDocumentTitleUpdate));
