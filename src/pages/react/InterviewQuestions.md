# React interview questions

## Name lifecycle methods adn their purpose

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

### What is a Pure Component?

A pure component is a component which, given the same props, always renders the same UI, and has no side-effects. These kinds of components are generally very easy to test. You’ll need a way to select the component (in this case, we’re selecting by the greeting className), and you'll need to know the expected output. To write pure component tests, I use render-component from RITEway.

### What is the difference between a function and class component?

### What does Immutable mean?

Basically means an object cannot be mutated, it always returns a new object with the updated operation, like a copy of the object, not amending the original data. Can be useful in UI's when we need to revert back an action.

### What is a higher order component?

### Why have a single state of truth?

### When should you use local state, global state or Redux/Context.API?

### How does Redux prevent mutation?

### When is a good time to use REFS instate of State?

I have used in in an input form which enabled me to use less code because I didn't have to declare methods for the changing based on state, I just did an onChange method of the Ref.

### Unit testing with React

### Why is Redux good?

For medium to large web sites, it will be very good to handle changes to state and seeing everything through the very good Redux developer tool. For small websites it will be overkill because setting up Redux requires a lot code to do simple things. You have to have a `reducer` call an `action`, create an `action` etc etc.
