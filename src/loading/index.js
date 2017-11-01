import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import classNames from 'classnames';
import * as colors from '../theme/colors';

const styles = {
  '@keyframes placeHolderShimmer': {
    '0%': {backgroundColor: '#dddddd'},
    '35%': {backgroundColor: '#dddddd'},
    '50%': {backgroundColor: '#eeeeee'},
    '65%': {backgroundColor: '#dddddd'},
    '100%': {backgroundColor: '#dddddd'},
  },
  shimmer: {
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationName: 'placeHolderShimmer',
    animationTimingFunction: 'linear',
    color: 'rgba(0,0,0,0)',
    textDecoration: 'none',
    borderRadius: '4px',
    height: ({height})=>(height || 50),
    width: ({width})=>(width || 200),
  },
};

function _Loading (props) {
  const {
    classes,
    className,
    height,
    width,
    ...remainingProps
  } = props;

  return (
    <div className={classNames(className, classes.shimmer)}
         height={height}
         width={width}
    >
      loading
    </div>
  );
};

export const Loading = compose(
  injectSheet(styles),
)(_Loading);
