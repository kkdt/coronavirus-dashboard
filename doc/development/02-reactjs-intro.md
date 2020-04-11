# reactjs introduction

# Overview

- <div id="root"></div>, This is the “root” DOM node because everything inside it will be managed by React DOM.

- React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

- Actual DOM vs. virtual DOM (reactjs)

- Current virtual DOM is computed after some data changes; previous virtual DOM is computed before some data changes.

- React only updates the actual DOM when necessary; manipulating the actual DOM is slow.

- React is able to minimize manipulations to the actual DOM by keeping track of a virtual DOM and only updating the real DOM when necessary and with only the necessary changes.

- User changes state of application > Re-render virtual DOM > diff virtual/actual DOM > only update actual DOM with necessary changes

- Each component has the ability to manage its own state and pass its state down to child components if needed.

- In React components, code reuse is primarily achieved through composition rather than inheritance. i.e. Recommendation against creating your own base component classes.

# Components

- Always start component names with a capital letter.

- React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

- We recommend naming props from the component’s own point of view rather than the context in which it is being used.

- Props are read-only; Whether you declare a component as a function or a class, it must never modify its own props.

# References

1. https://reactjs.org/docs/rendering-elements.html

2. https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/
