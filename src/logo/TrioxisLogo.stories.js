import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TrioxisLogo } from './';

storiesOf('TrioxisLogo', module)
  .add('default (GreenBlue)', () => <TrioxisLogo width={200} height={200}/>)
  .add('YellowRed', () => <TrioxisLogo type={TrioxisLogo.Types.YellowRed} width={200} height={200}/>)
  .add('Neutral', () => <TrioxisLogo type={TrioxisLogo.Types.Neutral} width={200} height={200}/>)
