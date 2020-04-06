# hooks

- Hooks are functions that let you “hook into” React state and lifecycle features from function components.

- `useState` Returns a stateful value, and a function to update it.

```
const [state, setState] = useState(initialState);
```

- `useEffect` Accepts a function passed that will run after the render is committed to the screen.

- To clean up resources created by `useEffect`, return a clean-up function.

```
useEffect(
    // parameter 1: a function with an optional function return
    () => {
        ..effect..
        return () => { ..cleanup.. };
    },
    // parameter 2: an array of watch variables
    []
)
``` 

- The clean-up function runs before the component is removed from the UI to prevent memory leaks.

- Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect. 

- If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

# References

1. https://reactjs.org/docs/hooks-reference.html

2. https://reactjs.org/docs/hooks-overview.html

