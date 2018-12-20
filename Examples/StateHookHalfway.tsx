import * as React from 'react';

const Counter:
    React.FunctionComponent<{ count: number, name: string, setCount: React.Dispatch<React.SetStateAction<number>> }> =
    ({ name, count, setCount }) => {
        return <div>
            <p>Hi {name}, You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>;
    }

const CounterContainer: React.FunctionComponent<{ name: string }> = ({ name }) => {
    const [count, setCount] = React.useState(1);
    return <Counter name={name} count={count} setCount={setCount} />
}

export default CounterContainer;