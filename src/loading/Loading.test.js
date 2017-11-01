import React from 'react';
import { mount } from 'enzyme';
import {Loading} from './';

jest.mock('react-jss',()=>{
  jest.spyOn(global.Math,'random').mockImplementation(()=>0.42);
  return jest.requireActual('react-jss')
})

test('Loading should render as snapshot defines', () => {
  const tree = mount(<Loading>Wow!</Loading>)

  expect(tree).toMatchSnapshot()
});
