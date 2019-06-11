# Possible React interview questions

## Name lifecycle methods and their purpose

We have the initial render and re-render, lifecyles have changed since version 16.4

### Render

`constructor()` is actually a lifecyle method, we use `this.state={}` here.

`getDerivedStateFromProps` is used rarely to update data before the `render()` method.

`componentDidMount() {}` is used often to call APIs because we want the DOM to be loaded first before we do the API call, to prevent error messages.

`componentWillUnmount() {}` is your final oportunity to do something before the component is erased from the dom.

`render()` is actually a lifecyle and mandatory, it returns your `jsx` , otherwise what is the point of a component.

### Re-Render Lifecyle methods

`shouldComponentUpdate` this is a performance optimization method

---

## What are controlled components?

React controls the component in a different way to standard HTML forms, the component containing the form will keep track of the value of the input in it's state and will re-render the component each time the callback function e.g. `onChange` is fired as the state will be updated.

## What is a Pure Component?

PureComponent is exactly the same as Component except that it handles the `shouldComponentUpdate` method for us. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called. It helps performance.

## What is the difference between a function and class component?

Class components are when you need to declare a state, ie, a piece of data that will be changed or passed down, and lifecycle hooks. Function components don't require state, they just render some jsx or accept some data passed down as props.

## What does Immutable mean?

Basically means an object cannot be mutated, it always returns a new object with the updated operation, like a copy of the object, not amending the original data. Can be useful in UI's when we need to revert back an action.

## What is a higher order component?

Two things happen with an HOC:

1. Takes a component as argument
2. Return something
   Currying is the process of breaking down a function into a series of functions that each take a single argument. HOC's often use the double () which can throw some people `export default Loading("contacts")(Feed);`

## Why have a single state of truth?

One place to handle changes to data, will be much easier to manage, test and see what is happening.

## When should you use local state, global state or Redux/Context.API?

Use local state if your component is only changing data inside that component, other components don't need those values.
Global state is used when you want to use data in multiple components, you pass down the data through props.
Redux or the Context.API already built into React, is used when the passing down is getting to much, ie you have many nested components and the pass downing is getting tedius and hard to manage.

## How does Redux prevent mutation?

It uses a pattern known as immutability, basically makes a copy of an object rather than change the real object. This makes going back in time possible in that we can revert changes to data, this is useful for UI's like facebook when you want to revert something you posted etc.

## When is a good time to use REFS instate of State?

I have used in in an input form which enabled me to use less code because I didn't have to declare methods for the changing based on state, I just did an onChange method of the Ref.

## Unit testing with React

## Why is Redux good?

For medium to large web sites, it will be very good to handle changes to state and seeing everything through the very good Redux developer tool. For small websites it will be overkill because setting up Redux requires a lot code to do simple things. You have to have a `reducer` call an `action`, create an `action` etc etc.

### Explain the components of Redux.

**Redux is composed of the following components:**

- Action — Actions are payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using store.dispatch(). Primarly, they are just an object describes what happened in our app.
- Reducer — Reducers specify how the application’s state changes in response to actions sent to the store. Remember that actions only describe what happened, but don’t describe how the application’s state changes. So this place determines how state will change to an action.
- Store — The Store is the object that brings Action and Reducer together. The store has the following responsibilities: Holds application state; Allows access to state via getState(); Allows state to be updated via dispatch(action); Registers listeners via subscribe(listener); Handles unregistering of listeners via the function returned by subscribe(listener).
