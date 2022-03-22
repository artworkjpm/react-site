# React Style Guide

**Table of Contents**

- [Architecture](#architecture)
- [Bootstraping the application](#bootstraping)
- [Folder structure](#folder-structure)
- [Naming conventions](#naming)
- [State management](#state-management)
- [Performance](#performance)

# Architecture and Design

React is a JavaScript library for building user interfaces whose
philosophy is based on explicit data flow and composition.

Plan to follow a reference architecture for the application, like
Isomorphic, Single Page Application or Server Side Rendering.

## Use composition instead of inheritance

The React documentation recommends using
[composition instead of inheritance] to reuse code between components.

[composition instead of inheritance]: https://en.reactjs.org/docs/composition-vs-inheritance.html

## Use functional components

JavaScript classes do not fit well with the React component
approach for several reasons. [Hooks] can cover all common use cases
for classes while providing more flexibility in extracting,
testing, and reusing code.

Use the **_useState_** and **_useReducer_** to manage
the component state and **_useEffect()_** to manage the
component lifecycle.

Remember to follow the [Rules of Hooks].

[hooks]: https://reactjs.org/docs/hooks-intro.html
[rules of hooks]: https://reactjs.org/docs/hooks-rules.html

## Use the Container Design Pattern

The Container Pattern is used to separate data fetching, logic
and state from presentational components or dumb components that
just render the view.

Dump components are preferred over container components.
Dumb components are easier to reuse and test.

## State Management

A State Management should be defined. It is recommended not to
use multiple state management libraries in a single application.

If your application needs a global state, Redux is the most
standard state management solution. The modern and official approach
for efficient Redux development is [Redux Toolkit].

Keep state as local as possible and use a global state only
when [prop-drilling] really becomes a problem.

If only one section of your app needs some state, then manage
that in the least common parent of those components rather than
putting it at the highest level of the app.

If you are using the React Context API, for instance because you
have to deliver a component library without Redux, do not put
too much application state in a single Context,
because when a React <Context.Provider> gets a new value, all the
components that consume that value are updated and have to render,
even if it is a functional component that only cares about some part
of the data.

[redux toolkit]: https://redux-toolkit.js.org/
[react state management]: https://kentcdodds.com/blog/application-state-management-with-react
[prop-drilling]: https://kentcdodds.com/blog/prop-drilling

## Use TypeScript

At Cognizant, the use of TypeScript is greatly encouraged. TypeScript adds a
powerful static typing system that makes the code easier to understand and helps
catching common errors quickly thanks to a powerful tooling.

## Multi Language Support

All the language-related aspects should be clearly defined and implemented
as part of the Design.

## Identify Non-functional requirements

All non-functional requirements (Usability, Security, Reliability, Performance,
Testability, Compatibility, Configurability, Scalability, Regulatory) should
be identified and considered as part of the Design. They should be measurable,
achievable, and testable.

## Accessibility

React have support for [accessibility], often using standard HTML techniques.
Web accessibility does not only benefit people with disabilities, it is also
good for people using mobile phones, smart watches, smart TVs, and other
devices with different input modes. Even if accessibility is not a requirement
because the application will not support people with disabilities or different
devices, making your application accessible by default will make it easier to
test with test automation tools.

[accessibility]: https://reactjs.org/docs/accessibility.html

# Bootstrapping the application

Use the standard Create React App (CRA) or Next.js folder structure (if you are using Next.js).

If your application requires Server Side Rendering (SSR) and/or fast loading
times, consider using Next.js from the start.

Configure Jest, Cypress, ESLint, EditorConfig and Husky.

Avoid ejecting the application unless there are strong
reasons to do that.

# Folder structure

In addition to the folder structure that CRA or Next.js creates, you should create some additional folders:

| Path            | Description            |
| --------------- | ---------------------- |
| /src/screens    | Page Layout components |
| /src/components | Application components |
| /src/services   | Service helpers        |
| /src/hooks      | Hooks                  |
| /src/types      | Types                  |
| /src/helpers    | Helpers                |

For big applications, one single /src/components may become full of files.
In that case you might prefer grouping related components in modules:

| Path                            | Description       |
| ------------------------------- | ----------------- |
| /src/modules/module1/components | Module components |
| /src/modules/module1/services   | Service helpers   |
| /src/modules/module1/hooks      | Hooks             |
| /src/modules/module1/types      | Types             |
| /src/modules/module1/helpers    | Utils or helpers  |

You may have a /src/modules/common module with common components, services or
helpers used by most of the other modules.

Do not create submodules or additional nesting. The official React guidelines
discourage creating too much nesting ([nesting]).

[nesting]: https://en.reactjs.org/docs/faq-structure.html#avoid-too-much-nesting

If you are using Next.js there are an additional
/src/pages and /src/pages/api folders for the routes:

```
/public
    favicon.ico
/src
    /components
        /[Name]
            [Name].tsx
            [Name].test.tsx
    /hooks
    /types
    /utils
    /test
    /pages
        /api
          /[name]API
              [name]API.js
        _app.tsx
        _document.tsx
        index.tsx
```

# Naming conventions

ReactJS is unopinionated regarding naming conventions, but most
projects follow the [airbnb naming conventions], that contrary to
Angular uses PascalCase for component filenames:

```
├── components
│   ├── SomeComponent
│   │   ├── SomeComponent.tsx
│   │   ├── SomeComponent.test.tsx
│   │   └── SomeComponent.css
```

[airbnb naming conventions]: https://github.com/airbnb/javascript/tree/master/react#naming

# Testing

## Unit tests

Jest and React Testing Library ([RTL]) are the official [recommended tools] from the React documentation.

While Enzyme has been the most popular library for testing React components,
[Enzyme is now discouraged] by the React core team.

Also, as today (2021-11-07) [Enzyme does not support React 17].

The React Testing Library [Guiding Principles] state that
the more your tests resemble the way your software is used,
the more confidence they can give you. So, rather than dealing with instances
of rendered React components, your tests will work with actual DOM nodes.

Avoid using implementation details in your tests, like CSS classnames.
RTL encourages finding form elements by their label text (just like a user would),
and finding links and buttons from their text (like a user would).
Finding elements by a data-testid is an escape hatch for elements where
the text content and label do not make sense or is not practical.

Mock child components and APIs within your unit tests. If you do not mock child
components, then it is not an unit test, and it will be harder to maintain.

Consider using mutation testing with tools like [Stryker] to test the
quality or your tests.

[rtl]: https://testing-library.com/docs/react-testing-library/intro/
[recommended tools]: https://reactjs.org/docs/testing.html
[enzyme is now discouraged]: https://github.com/enzymejs/enzyme/issues/2429#issuecomment-817750268
[enzyme does not support react 17]: https://github.com/enzymejs/enzyme/issues/2429
[guiding principles]: https://testing-library.com/docs/guiding-principles

## End To End Tests

In addition to unit test, you should implement functional or end to end tests with tools like [Cypress] or [Playwright].

As stated above, avoid using implementation details or CSS classnames in your
E2E tests.

[cypress]: https://www.cypress.io/
[playwight]: https://playwright.dev/

# Responsive Web Design

- Define standard breakpoints
- Use the viewport meta tag to control layout on mobile browsers
- Use scalable units
- Consider image optimization using srcset
- Consider Fluid Grid Systems
  Fluid grids allow to create responsive designs which suit dynamic screen sizes.
  The complexity of developing a fluid grid can be minimized by using an existing
  CSS framework. Adjust the fluid grid when necessary according to your design
  and try to provide the best browsing experience for the user.

# Coding Standards

## ESLint

Configure ESLint with the [airbnb style guide] and the React plugins:
eslint-plugin-react, eslint-plugin-react-hooks.

Do not disable react-hooks/exhaustive-deps.

Consider using git pre-commit hooks to check for lint and type
errors with packages like lint-staged and husky.

## Clean code principles

Take care of the following points:

- Create small functions and components.
- No hardcoding.
- Remove dead or obsolete code.
- Add comments if something in the code must be clarified, but do
  not explain how the code works. The code should be self-explanatory.
- Use consistent naming conventions.
- Use console.log() for debugging in your local environment only.

# DOM Manipulation

Do not use direct DOM manipulation (i.e: document.getElement). Use
React refs if you need access to DOM nodes. See [useRef() hook].

Avoid dangerouslySetInnerHTML for template injection. If it is
unavoidable, then sanitize the HTML string using js libraries
like dompurify.

[airbnb style guide]: https://github.com/airbnb/javascript
[useref() hook]: https://reactjs.org/docs/hooks-reference.html#useref

# Performance

## Profiling

You can use tools like [Google Lighthouse] and the React Developer Tools plugin
to profile the application.

[google lighthouse]: https://developers.google.com/web/tools/lighthouse?hl=en

## Avoid child updates if the state and props do not change

By default, React re-renders all children if the parent component is
updated, even if the child props and state are the same, because React
does not know in advance if the child component is pure.

A pure component is a component that renders the same output for the same
state and the same props. To let React know that some functional component
is pure or that it does not need to re-render if the state and props do not
change, **you should use [React.memo]**.

[react.memo]: https://reactjs.org/docs/react-api.html#reactmemo

## Avoid inadvertently triggering re-renders changing props

React compares new and old props by value for primitive types, and by
reference for objects and functions.

If you define a function callback inside a functional component,
the function reference will be different for every function execution,
so you may end up triggering a child re-render even if the callback
or object is the same.

To avoid this kind of re-renders when the child component is expensive,
you can memorize the objects or function callbacks using
**_useMemo()_** and **_useCallback()_** hooks in the
parent component. Also, in the child component, you can specify what
props trigger a re-render or what compare function should be used to
check if the props changed by means of React.memo().

For example, the following implementation triggers child re-renders because
the props item and onClick have always a different value:

```
const Parent = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const promos = useSelector(selectActivePromos);

  // This generates always a new function
  const handleClick = () => {
    setCounter((cnt) => cnt + 1);
    dispatch(clickAction());
  };

  // This generates always a new object
  const item = {
    image: "https://picsum.photos/200/300/?blur"
  };

  return (
    <div className="Parent">
      <p>Parent renders: {counter}</p>
      <Child item={item} promos={promos} onClick={handleClick} />
    </div>
  );
};
```

The optimized implementation would be like this:

```
const Parent = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const promos = useSelector(selectActivePromos);

  const handleClick = useCallback(() => {
    setCounter((cnt) => cnt + 1);
    dispatch(clickAction());
  }, [dispatch]);

  const item = useMemo(
    () => ({
      image: "https://picsum.photos/200/300/?blur"
    }),
    []
  );
  return (
    <div className="Parent">
      <p>Parent renders: {counter}</p>
      <Child item={item} promos={promos} onClick={handleClick} />
    </div>
  );
};

```

While performance can be improved by using useMemo(), it can also slow down
your application if you overuse it. There is no need to memoize always the
objects or callbacks. These hooks should be used just with expensive
functions or components.

## Avoid inadvertently triggering re-renders changing state

You can use React.memo to avoid component re-renders when props change,
but there is no way to avoid a re-render if the state changes.

Avoid unnecessary useEffect() to update values that are always computable
from the props, because it will trigger unnecessary re-renders.

If your component is subscribed to side effects like redux selectors,
consider that objects are compared by reference, not by value.
That means, if a selector returns a different object reference each
time, your component will re-render with **every** dispatch(), even
if the selected state has not changed.

Avoid computing objects in redux selectors,
or use **createSelector** from redux-toolkit or re-select.

For example:

```
// ❌ This selector triggers a re-render with every dispatch()
export const selectActivePromos = (state: AppState) =>
  state.slice1.promos.filter((p) => p.active);

```

The correct implementation with **_createSelector_** would be:

```
import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store/store";

export const selectPromos = (state: AppState) => state.slice1.promos;

export const selectActivePromos = createSelector([selectPromos], (promos) =>
  promos.filter((p) => p.active)
);
```

See [deriving-data-selectors]

[deriving-data-selectors]: https://redux.js.org/usage/deriving-data-selectors
