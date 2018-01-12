import React from "react";
import { mount } from "enzyme";
import { StyleAtlasLogo } from "./";

jest.mock("react-jss", () => {
  let increment = 0.42;
  jest
    .spyOn(global.Math, "random")
    .mockImplementation(() => (increment += 0.01));
  return jest.requireActual("react-jss");
});

describe("Logo", () => {
  it("should render as snapshot defines", () => {
    const tree = mount(<StyleAtlasLogo />);
    expect(tree).toMatchSnapshot();
  });
});
