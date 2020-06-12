import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import App from "./App";
/**
 * Setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(React.createElement(App));
};

it("app renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
