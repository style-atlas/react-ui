import React from 'react';
import { mount } from 'enzyme';
import {ContentContainer} from './';

jest.mock('react-jss',()=>{
  jest.spyOn(global.Math,'random').mockImplementation(()=>0.42);
  return jest.requireActual('react-jss')
})

test('ContentContainer should render as snapshot defines', () => {
  const tree = mount(<ContentContainer />)
  expect(tree).toMatchSnapshot()
});
