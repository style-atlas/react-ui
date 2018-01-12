import React from 'react';
import { mount } from 'enzyme';
import {StyleAtlasLogo} from './';

jest.mock('react-jss', () => {
  let increment = 0.42
  jest.spyOn(global.Math,'random').mockImplementation(() => increment += 0.01);
  return jest.requireActual('react-jss')
})

describe('Logo', () => {
  it('should render as snapshot defines', () => {
    const tree = mount(<StyleAtlasLogo />)
    expect(tree).toMatchSnapshot()
  });

  it('should render unique gradient ids to prevent clashes if there are multiple on the page', () => {
    const tree = mount(
      <div>
        <StyleAtlasLogo />
        <StyleAtlasLogo type={StyleAtlasLogo.Types.YellowRed} />
      </div>
    )

    expect(tree.find('linearGradient').get(0).props.id)
    .not.toBe(tree.find('linearGradient').get(1).props.id)
  });
})
