
1. What is JSX, and why is it used?
Ans: JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JS. It’s used in React because it makes UI code cleaner, easier to understand, and more powerful.

2.What is the difference between State and Props?
Ans: Props are used to pass data from a parent to a child component and are read-only. State is used to manage data inside a component that can change over time. Updating state re-renders the component, but props cannot be modified by the component itself.

3.What is the useState hook, and how does it work?
Ans: useState is a React hook that allows functional components to have state. It returns a state variable and a function to update it. When the state is updated, the component automatically re-renders to reflect the changes.

4.can you share state between components in React?
Ans: Yes, you can share state between components by lifting the state up to their common parent and passing it down as props. For larger applications, you can use React’s Context API or state management libraries like Redux to manage shared state more efficiently.

5.How is event handling done in React?
Ans: Event handling in React is done using camelCase event names and passing functions as event handlers. React uses Synthetic Events to ensure cross-browser consistency. We attach event handlers like onClick or onChange directly to elements and use functions to handle user interactions.