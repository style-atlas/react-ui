import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { StyleAtlasLogo } from './';

storiesOf('StyleAtlasLogo', module)
  .add('default (GreenBlue)', () => <StyleAtlasLogo width={200} height={200}/>)
  .add('YellowRed', () => <StyleAtlasLogo type={StyleAtlasLogo.Types.YellowRed} width={200} height={200}/>)
  .add('Neutral', () => <StyleAtlasLogo type={StyleAtlasLogo.Types.Neutral} width={200} height={200}/>)
