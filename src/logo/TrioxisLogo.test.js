import React from 'react';
import { mount } from 'enzyme';
import {TrioxisLogo} from './';

jest.mock('react-jss',()=>{
  jest.spyOn(global.Math,'random').mockImplementation(()=>0.42);
  return jest.requireActual('react-jss')
})

test('Logo should render as snapshot defines', () => {
  const tree = mount(<TrioxisLogo />)
  expect(tree).toMatchSnapshot()
});
