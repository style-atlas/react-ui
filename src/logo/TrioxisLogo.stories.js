import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { StyleAtlasLogo } from './';

storiesOf('Logo', module)
  .add('200x200', withInfo(``)
    (() => <StyleAtlasLogo width={200}/>))
  .add('800x800', withInfo(``)
    (() => <StyleAtlasLogo width={800}/>))
