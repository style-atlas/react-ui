import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.(ts|js)x?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
