import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Placeholder } from './';

storiesOf('Placeholder', module)
  .add('Placeholder', () => <div style={{width: 300}}>
                          <Placeholder>
                            <h1>Currently Loading</h1>
                          </Placeholder>
                          <p style={{fontSize: 18}}>
                            Welcome to the Placeholder Component. Use this component as a placeholder for another that is loading in.
                            <br/>
                            The component's children determine it's size (much like a pregnant person).
                          </p>
                        </div>)
