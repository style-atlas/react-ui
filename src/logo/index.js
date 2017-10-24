import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import * as colors from '../theme/colors';
import {defaultProps, setPropTypes, compose, setStatic} from 'recompose'

const types = {
  GreenBlue: 'GreenBlue',
  YellowRed: 'YellowRed',
  Neutral: 'Neutral'
};

const Gradients = {
  GreenBlue: [colors.G200, colors.B200],
  YellowRed: [colors.Y200, colors.R200],
  Neutral: [colors.N10, colors.N30]
}

const styles = {
  stop0: {
    stopColor: ({type}) => Gradients[type][0],
    transition: '0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) 0s'
  },
  stop1: {
    stopColor: ({type}) => Gradients[type][1],
    transition: '0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) 0.2s'
  }
}

const Logo = ({
  type = 'GB',
  width,
  height,
  className,
  classes
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <title>
        Trioxis Logo
      </title>
      <defs>
        <linearGradient
          id="trx-logo-gradient"
          x1="18.97" y1="-87.11" x2="485.24" y2="-553.38"
          gradientTransform="matrix(1 0 0 -1 0 -29.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" className={classes.stop0} />
          <stop offset="1" className={classes.stop1} />
        </linearGradient>
      </defs>
      <path
        style={{fill: 'url(#trx-logo-gradient)'}}
        d="M423.32 0L213.44 363.63H78.66L288.54 0zM0 500h345.46l-67.59-116.6H67.19zm500 0L328.46 203.56l-67.19 116.6L365.22 500zM76.28 0l94.86 164 67.19-116.6L211.07 0z"
      />
    </svg>
  )
}


export const TrioxisLogo = compose(
  setPropTypes({
    width: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.oneOf(Object.keys(types))
  }),
  setStatic('Types', types),
  defaultProps({
    type: types.GreenBlue
  }),
  injectSheet(styles),
)(Logo);
