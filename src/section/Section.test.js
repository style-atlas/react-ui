import React from 'react';
import { mount } from 'enzyme';
import {Section} from './';

jest.mock('react-jss',()=>{
  jest.spyOn(global.Math,'random').mockImplementation(()=>0.42);
  return jest.requireActual('react-jss')
})

test('Section should render as snapshot defines', () => {
  const tree = mount(<Section />)
  expect(tree).toMatchSnapshot()
});
