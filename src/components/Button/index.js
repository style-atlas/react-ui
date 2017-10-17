import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose, defaultProps } from 'recompose';
import { body } from '../../theme/fonts';
import * as colors from '../../theme/colors';

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
  },
};

function _Button (props) {
  const {
    classes,
    className,
    children,
    Component,
    sheet,
    ...remainingProps
  } = props;

  return (
    <Component
      className={classNames(classes.button, className)}
      {...remainingProps}
      >
      {children}
    </Component>
  );
};

export const Button = compose(
  defaultProps({
    Component:'button'
  }),
  injectSheet(styles),
)(_Button);
