import * as React from 'react';

import StateWrapper from './StateWrapper';

type Props = { count: number, setCount: (a: number) => null, name: string };

const Counter: React.SFC<Props> = ({ count, setCount, name }) =>
  <div>
    <p>Hi {name}, You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
  </div>;

const mapTuple = ([count, setCount]: [number, React.Dispatch<React.SetStateAction<number>>]) => ({ count, setCount });

export default StateWrapper(1, mapTuple)(Counter);