import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { StyleAtlasLogo } from './';

storiesOf('StyleAtlasLogo', module)
  .add('200x200', () => <StyleAtlasLogo width={200}/>)
  .add('800x800', () => <StyleAtlasLogo width={800}/>)
