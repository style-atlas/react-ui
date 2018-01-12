import React from "react";
import * as colors from "./colors";

test("Colors should be as snapshot defines", () => {
  expect(colors).toMatchSnapshot();
});
