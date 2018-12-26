# hookly

This project aims to overcome some of the issues in React Hooks.  It should also allow for easier migration from Recompose to React Hooks

Consider the following example:

```TypeScript
const Counter: React.FunctionComponent<{ name: string }> = ({ name }) => {
    const [count, setCount] = React.useState(1);
    return <div>
        <p>Hi {name}, You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
    </div>;
}
```

It is a functional component state.  It mixes both the state, and the presentation in the same code.  This is incorrect as it is a mixed level of abstraction.

We can fix this by splitting the presentation and the state into two components, the presentation component, and a container component.

```TypeScript
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
```

It is possible to abstract the container component further, eventually creating a generic higher order component that will allow you to apply useState hooks to any component, allowing you to map the hook results to the properties of the component.

```TypeScript
type Props = { count: number, name: string } & { setCount: setState<number> };

const Counter: React.FunctionComponent<Props> = ({ count, setCount, name }) =>
  <div>
    <p>Hi {name}, You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
  </div>;

export default stateWrapper(1, ([count, setCount]) => ({ count, setCount }))(Counter);
```