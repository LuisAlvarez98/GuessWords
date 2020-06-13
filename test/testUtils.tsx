import { ShallowWrapper, ReactWrapper } from "enzyme";

export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  value: string
) => {
  return wrapper.find(`[data-test='${value}']`);
};
