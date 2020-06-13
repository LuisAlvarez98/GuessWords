import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import Input from "./Input";
type Props = {
  secretWord: string;
};

/**
 * Setup
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

it("input renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess: jest.Mock<any, any> = jest.fn();
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  it("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    //create mock event and apply that as the change event into the input box [ simulate input]
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  it("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenLastCalledWith("");
  });
});
