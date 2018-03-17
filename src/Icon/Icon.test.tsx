import React from "react";
import { mount } from "enzyme";
import * as Icons from "./index";
import { createSATheme } from "../Provider";

Object.entries(Icons).map(([name, Icon]) =>
  test(`${name} should match snapshot`, () => {

    const tree = mount(<Icon />);
    expect(tree).toMatchSnapshot();
  })
);
