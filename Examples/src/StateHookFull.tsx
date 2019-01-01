import { FunctionComponent, useState } from "react";

interface IProps {
    readonly count: number;
    readonly name: string;
    readonly setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter:
    FunctionComponent<IProps> =
    ({ name, count, setCount }) => {
        return <div>
            <p>Hi {name}, You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>;
    };

const CounterContainer: FunctionComponent<{ readonly name: string }> = (props) => {
    const [count, setCount] = useState(1);
    const finalProps: IProps = { ...props, count, setCount };
    return <Counter {...finalProps} />;
};

export default CounterContainer;
