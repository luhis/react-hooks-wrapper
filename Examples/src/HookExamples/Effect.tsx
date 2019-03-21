import * as React from "react";

export const CounterWithDocumentTitleUpdate: React.FunctionComponent = () => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        document.title = `You clicked ${count} times`;
        return undefined;
    });
    return (<div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>);
}
