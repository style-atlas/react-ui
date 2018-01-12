import React from "react";
import * as fonts from "./fonts";

test("Fonts should be as snapshot defines", () => {
  expect(fonts).toMatchSnapshot();
});
