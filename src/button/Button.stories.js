import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from './';

const sharedProps = {
  onClick:action('clicked')
}

storiesOf('Button', module)
  .add('primary', () => <Button primary {...sharedProps}>Primary Button</Button>)
  .add('primary disabled', () => <Button primary disabled {...sharedProps}>Primary Button</Button>)
  .add('secondary', () => <Button secondary {...sharedProps}>Secondary Button</Button>)
  .add('secondary disabled', () => <Button secondary disabled {...sharedProps}>Secondary Button</Button>)
  .add('with text', () => <Button {...sharedProps}>Hello Button</Button>)
  .add('with multiline text', () => <Button {...sharedProps}>Hello<br/>Button</Button>)
