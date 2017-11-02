import React from 'react';
import { mount } from 'enzyme';
import {Break} from './';

jest.mock('react-jss',()=>{
  jest.spyOn(global.Math,'random').mockImplementation(()=>0.42);
  return jest.requireActual('react-jss')
})

test('Break should render as snapshot defines', () => {
  const tree = mount(<Break />)
  expect(tree).toMatchSnapshot()
});
