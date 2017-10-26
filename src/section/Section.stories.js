import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Section } from './';

storiesOf('Section', module)
  .add('Section', () => <Section >
                          This is a section! Look carefully and you can see the background colour!
                        </Section>)
