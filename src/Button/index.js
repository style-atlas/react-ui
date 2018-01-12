import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import { compose, defaultProps } from "recompose";
import { body } from "../Theme/fonts";
import * as colors from "../Theme/colors";

const styles = {
  button: {
    fontSize: 14,
    padding: [9, 51],
    letterSpacing: 2,
    fontWeight: 700,
    fontFamily: body,

    display: "inline-block",
    textDecoration: "none",
    textTransform: "uppercase",
    background: "rgba(0,0,0,0)",
    borderRadius: 500,
    border: [3, "solid", colors.C300],
    color: colors.C300,
    lineHeight: 1.5,
    cursor: "pointer",

    transition: "all 0.25s",
    boxSizing: "border-box",

    "&:hover": {
      color: colors.N0,
      borderColor: colors.C400,
      backgroundColor: colors.C400
    }
  },

  primary: {
    padding: [12, 54],
    border: "none",
    color: colors.N0,
    backgroundColor: colors.C300,

    "&:hover": {
      color: colors.N0,
      backgroundColor: colors.C400
    }
  },

  secondary: {
    // a secondary button is a normal button
  },

  secondaryLight: {
    color: colors.N0,
    borderColor: colors.N0,

    "&:hover": {
      color: colors.N900,
      backgroundColor: colors.N0,
      borderColor: colors.N0
    }
  },

  disabled: {
    cursor: "initial",
    padding: [12, 54],
    color: colors.N80,
    backgroundColor: colors.N40,
    borderStyle: "none",

    "&:hover": {
      color: colors.N80,
      backgroundColor: colors.N40
    }
  }
};

function _Button(props) {
  const {
    classes,
    className,
    children,
    component: Component,
    sheet,
    primary,
    secondary,
    secondaryLight,
    disabled,
    ...remainingProps
  } = props;

  return (
    <Component
      className={classNames(
        classes.button,
        primary ? classes.primary : null,
        secondary ? classes.secondary : null,
        secondaryLight ? classes.secondaryLight : null,
        disabled ? classes.disabled : null,
        className
      )}
      disabled={disabled}
      {...remainingProps}
    >
      {children}
    </Component>
  );
}

export const Button = compose(
  defaultProps({
    component: "button"
  }),
  injectSheet(styles)
)(_Button);
