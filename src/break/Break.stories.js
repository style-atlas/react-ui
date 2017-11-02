import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { body } from '../theme/fonts';

import { Break } from './';

const style = {
  fontFamily: body,
}

storiesOf('Break', module)
  .add('Break', () => <Break fontColor='white'
                             gradientOne='#2EE677'
                             gradientTwo='#00C8FF'
                      >
                        <h3 style={style}>The Trioxis Break has three essential props:</h3>
                        <h4 style={style}>gradientOne, gradientTwo</h4>
                        <h4 style={style}>and fontColor</h4>
                      </Break>)
