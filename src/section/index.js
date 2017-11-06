import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose } from 'recompose';
import * as colors from '../theme/colors';

import { ContentContainer } from '../contentContainer';

const styles = {
  wrapper: {
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
    ...remainingProps
  } = props;

  return (
    <section {...remainingProps} className={classNames(classes.wrapper, className)}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </section>
  );
};

export const Section = compose(
  injectSheet(styles),
)(_Section);
