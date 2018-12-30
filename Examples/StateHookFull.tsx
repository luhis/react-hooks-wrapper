import { FunctionComponent, useState, Dispatch, SetStateAction } from "react";

const Counter:
    FunctionComponent<{ count: number, name: string, setCount: Dispatch<SetStateAction<number>> }> =
    ({ name, count, setCount }) => {
        return <div>
            <p>Hi {name}, You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>;
    }

const CounterContainer: FunctionComponent<{ name: string }> = props => {
    const [count, setCount] = useState(1);
    const finalProps = { ...props, count, setCount };
    return <Counter {...finalProps} />;
};

export default CounterContainer;
