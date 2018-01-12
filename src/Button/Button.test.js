import React from "react";
import { mount } from "enzyme";
import { Button } from "./";

jest.mock("react-jss", () => {
  jest.spyOn(global.Math, "random").mockImplementation(() => 0.42);
  return jest.requireActual("react-jss");
});

test("Button should render as snapshot defines", () => {
  const tree = mount(<Button>Wow!</Button>);

  expect(tree).toMatchSnapshot();
});
