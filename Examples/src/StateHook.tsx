import * as React from "react";

const Counter: React.FunctionComponent<{ name: string }> = ({ name }) => {
    const [count, setCount] = React.useState(1);
    return <div>
        <p>Hi {name}, You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;
};

export default Counter;