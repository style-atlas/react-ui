import React from 'react';
import { mount } from 'enzyme';
import {Placeholder} from './';

jest.mock('react-jss',()=>{
  jest.spyOn(global.Math,'random').mockImplementation(()=>0.42);
  return jest.requireActual('react-jss')
})

test('Placeholder should render as snapshot defines', () => {
  const tree = mount(<Placeholder>Wow!</Placeholder>)

  expect(tree).toMatchSnapshot()
});
