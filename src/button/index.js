import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose, defaultProps } from 'recompose';
import { body } from '../theme/fonts';
import * as colors from '../theme/colors';

const strokeColor = colors.C300

const styles = {
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    background:'rgba(0,0,0,0)',
    fontSize: 14,
    padding: [14, 54],
    borderRadius: 500,
    border: [3, 'solid', strokeColor],
    color:strokeColor,
    fontWeight: 700,
    fontFamily: body,
    letterSpacing: 1.5,
    lineHeight:1.5,
    cursor: 'pointer',

    transition: 'all 0.25s',
    boxSizing: 'border-box',

    '&:hover': {
      color: colors.N0,
      borderColor: colors.C400,
      backgroundColor: colors.C400
    }
  },

  primary: {
    padding: [12, 54],
    border: 'none',
    color: colors.N0,
    backgroundColor: colors.C300,

    '&:hover': {
      color: colors.N0,
      backgroundColor: colors.C400,
    }
  },

  secondary: {
    // a secondary button is a normal button
  },

  disabled: {
    cursor: 'initial',
    padding: [12, 54],
    color: colors.N80,
    backgroundColor: colors.N40,
    borderStyle: 'none',

    '&:hover': {
      color: colors.N80,
      backgroundColor: colors.N40,
    }
  }
};

function _Button (props) {
  const {
    classes,
    className,
    children,
    component: Component,
    sheet,
    primary,
    secondary,
    disabled,
    ...remainingProps
  } = props;

  return (
    <Component
      className={classNames(
        classes.button,
        primary ? classes.primary : null,
        secondary ? classes.secondary : null,
        disabled ? classes.disabled : null,
        className,
      )}
      disabled={disabled}
      {...remainingProps}
      >
      {children}
    </Component>
  );
};

export const Button = compose(
  defaultProps({
    component:'button'
  }),
  injectSheet(styles),
)(_Button);
