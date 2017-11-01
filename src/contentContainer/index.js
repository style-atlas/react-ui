import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose } from 'recompose';

const styles = {
  contentContainer: {
    maxWidth: '1200px',
    margin: 'auto',
  },
};

function _ContentContainer (props) {
  const {
    classes,
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div className={classNames(classes.contentContainer, className)}>
      {children}
    </div>
  );
};

export const ContentContainer = compose(
  injectSheet(styles),
)(_ContentContainer);
