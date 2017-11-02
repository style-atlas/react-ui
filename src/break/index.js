import React from 'react';
import injectSheet from 'react-jss';
import { setPropTypes, compose } from 'recompose';

import {Section} from '../section';

const styles = {
  wrapper: {
    background: ({gradientOne, gradientTwo}) => `linear-gradient(to top right, ${gradientOne}, ${gradientTwo})`,
    textAlign: 'left',
    display: 'flex',
  },
  content: {
    padding: [48, 36],
    color: ({fontColor}) => fontColor,
  },
  '@media (min-width: 525px)': {
    content: {
      textAlign: 'center',
    }
  },
}

function _Break (props) {
  const {
    children,
    classes,
    className,
  } = props;

  return (
    <div className={className}>
      <Section className={classes.wrapper}>
        <div className={classes.content}>
          {children}
        </div>
      </Section>
    </div>

  )
}

export const Break = compose(
  injectSheet(styles)
)(_Break);
