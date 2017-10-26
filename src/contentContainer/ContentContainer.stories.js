import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ContentContainer } from './';

storiesOf('ContentContainer', module)
  .add('ContentContainer', () => <ContentContainer >
                                  <div style={{width: '100%', backgroundColor: 'grey', color: 'white', height: 100}}>
                                    This content is 1200px wide
                                  </div>
                                 </ContentContainer>)
