import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ContentContainer } from './';

const style = {
  width: '100%',
  backgroundColor: 'lightseagreen',
  color: 'white',
  height: 100,
  padding: 24,
  textAlign: 'center',
  fontSize: 24,
  borderRadius: 6,
}

storiesOf('ContentContainer', module)
  .add('ContentContainer', () => <ContentContainer >
                                  <div style={style}>
                                    This whole box is a child of ContentContainer.<br/>
                                    Children of ContentContainer are constrained to a maximum of 1200px.<br/>
                                    It's important to give children boundaries.
                                  </div>
                                 </ContentContainer>)
