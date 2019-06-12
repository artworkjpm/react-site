# Testing React component, unit test etc

- Validate props with PropTypes
- using jest
- snapshot testing, is a feature built into jest
- Example:

````import React from "react";
import { create } from "react-test-renderer";
import FeatureComponent from "../FeatureComponent";
describe("Feature component", () => {
  test("it matches the snapshot", () => {
    const component = create(<FeatureComponent />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});```
````

- toMatchSnapshot works this way:

  > it create a snapshot of the component if there isn’t any
  > it checks if the component matches the saved snapshot

- Does your component changes often? If so, **avoid snapshot testing**, use **react-test-renderer**.
- Jest makes mocking Axios easy as a breeze
- Mock Functions
