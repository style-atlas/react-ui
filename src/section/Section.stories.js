import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { body } from '../theme/fonts';

import { Section } from './';

const style = {
  width: '100%',
  backgroundColor: 'lightseagreen',
  color: 'white',
  padding: 24,
  textAlign: 'center',
  fontSize: 24,
  borderRadius: 6,
  boxSizing: 'border-box',
  fontFamily: body,
}

const background = {
  backgroundColor: 'gainsboro',
}

storiesOf('Section', module)
  .add('Section', () => <Section style={background}>
                          <div style={style}>
                            <p>
                              This is a section. Section's have a ContentContainer nested within them; meaning all children are constrained to a width of 1200px
                              while the Section itself spans the width of the screen (see the grey background?).<br/>
                              Pretty useful for giving window spanning backgrounds to content, right?
                            </p>
                          </div>
                        </Section>)
