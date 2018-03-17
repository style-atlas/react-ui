import React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "material-ui/styles";
import { MuiThemeProvider } from "material-ui/styles";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import defaultTheme from "./defaultTheme";
import merge from "lodash/merge";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

export const createSATheme = (opts?: {}) =>
  createMuiTheme(merge(defaultTheme, opts));

export const SAThemeProvider = MuiThemeProvider;

const Provider = ({ children, theme }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme || createSATheme()} children={children} />
  </JssProvider>
);

export default Provider;
