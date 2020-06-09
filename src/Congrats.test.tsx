import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

type Props = {
  success?: boolean;
};

/**
 * Factory function to create shallowWrapper for the Congrats Component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props: Props = {}) => {
  return shallow(React.createElement(Congrats, props));
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when 'sucess' prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when succes prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

// test("does not throw warning with expected props", () => {
//   const expectedProps = { success: false };
//   const propError =
// });
