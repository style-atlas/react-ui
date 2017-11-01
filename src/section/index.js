import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose } from 'recompose';
import * as colors from '../theme/colors';

import { ContentContainer } from '../contentContainer';

const styles = {
  section: {
    paddingBottom: '3em',
    width: '100%',
    backgroundColor: colors.N10,
  }
};

function _Section (props) {
  const {
    classes,
    className,
    children,
    style,
    ...remainingProps
  } = props;

  return (
    <div className={classNames(classes.wrapper, className)} style={style}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  );
};

export const Section = compose(
  injectSheet(styles),
)(_Section);
