import * as React from "react";

interface IFinalProps { readonly name: string; }

export const Counter: React.FunctionComponent<IFinalProps> = ({ name }) => {
    const [state, dispatch] = React.useState(0);
    return (<div>
        <p>Hi {name}, You clicked {state} times</p>
        <button onClick={() => dispatch(currCount => currCount + 1)}>
            Click me
      </button>
    </div>);
};

export default Counter;
