import React from 'react';
import { Button } from './';
import { mount } from 'enzyme';

test('true is true', () => {
  const tree = mount(<Button>Wow!</Button>)
  
  expect(tree).toMatchSnapshot()
});