import React from "react";
import { mount } from "enzyme";
import UIProvider, {createSATheme} from "./index";

test("Provider API should be consistent", () => {
  const tree = mount(<UIProvider>
    <div>Wow</div>
  </UIProvider>);

  expect(tree).toMatchSnapshot();
});

test("createSATheme API should be consistent", () => {
  const theme = createSATheme({});

  expect(theme).toMatchSnapshot();
});
