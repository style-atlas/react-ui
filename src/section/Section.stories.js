import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Section } from './';

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

const background = {
  backgroundColor: 'gainsboro',
}

storiesOf('Section', module)
  .add('Section', () => <Section style={background}>
                          <div style={style}>
                            This is a section. Section's have a ContentContainer nested within them; meaning all children are constrained to a width of 1200px
                            while the Section itself spans the width of the screen (see the grey background?).<br/>
                            Pretty useful for giving window spanning backgrounds to content, right?
                          </div>
                        </Section>)
