import React from "react";
import { mount } from "enzyme";
import UIProvider, {createSATheme} from "./index";

test("Provider API should be consistent", () => {
  const theme = createSATheme({});

  const tree = mount(<UIProvider theme={theme}>
    <div>Wow</div>
  </UIProvider>);

  expect(tree).toMatchSnapshot();
});
