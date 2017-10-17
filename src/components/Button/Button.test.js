import React from 'react';
import { Button } from './';
import { mount } from 'enzyme';

test('Button should render as snapshot defines', () => {
  const tree = mount(<Button>Wow!</Button>)
  
  expect(tree).toMatchSnapshot()
});