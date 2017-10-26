import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose } from 'recompose';

import { ContentContainer } from '../contentContainer';

const styles = {
  wrapper: {
    paddingBottom: '3em',
    width: '100%',
    backgroundColor: '#FBFCFC',
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
    <div className={classNames(classes.wrapper, className)}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  );
};

export const Section = compose(
  injectSheet(styles),
)(_Section);
