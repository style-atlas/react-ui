import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Loading } from './';

storiesOf('Loading', module)
  .add('Loading', () => <div>
                          <Loading />
                          <p style={{fontSize: 18}}>
                            Welcome to the Loading Component. Use this component as a placeholder for another that is loading in.
                            Use inline style to set the width and height.
                          </p>
                        </div>)
