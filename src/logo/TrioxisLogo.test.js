import React from 'react';
import { mount } from 'enzyme';
import {TrioxisLogo} from './';

jest.mock('react-jss', () => {
  let increment = 0.42
  jest.spyOn(global.Math,'random').mockImplementation(() => increment += 0.01);
  return jest.requireActual('react-jss')
})

describe('Logo', () => {
  it('should render as snapshot defines', () => {
    const tree = mount(<TrioxisLogo />)
    expect(tree).toMatchSnapshot()
  });

  it('should render unique gradient ids to prevent clashes if there are multiple on the page', () => {
    const tree = mount(
      <div>
        <TrioxisLogo />
        <TrioxisLogo type={TrioxisLogo.Types.YellowRed} />
      </div>
    )

    expect(tree.find('linearGradient').get(0).props.id)
    .not.toBe(tree.find('linearGradient').get(1).props.id)
  });
})
