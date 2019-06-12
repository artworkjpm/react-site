# Testing React component, unit test etc

- using jest
- snapshot testing, is a feature builtinto jest
  Example:

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
