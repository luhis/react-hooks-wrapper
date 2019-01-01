import * as React from "react";

interface IProps {
    readonly count: number;
    readonly name: string;
    readonly setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter:
    React.FunctionComponent<IProps> =
    ({ name, count, setCount }) => {
        return <div>
            <p>Hi {name}, You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>;
    };

const CounterContainer: React.FunctionComponent<{ readonly name: string }> = ({ name }) => {
    const [count, setCount] = React.useState(1);
    return <Counter name={name} count={count} setCount={setCount} />;
};

export default CounterContainer;
