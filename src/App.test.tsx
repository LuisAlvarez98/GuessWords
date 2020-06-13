import React from "react";
import { mount, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import App from "./App";
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

/**
 * Setup
 * @returns {ReactWrapper}
 */
const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  // useEffect works only with mount

  return mount(React.createElement(App));
};

it("app renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

//check if function has been called on app mount.
describe("getSecretWord calls", () => {
  it("getSecretWord gets called on App mount", () => {
    setup();

    //check to see if secret word has updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
