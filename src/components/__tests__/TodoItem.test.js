import * as React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import TodoItem from '../TodoItem';
import { CheckedText } from '../TodoItem';

describe('<TodoItem />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
  });
  it('togglecheck should change boolean state', () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper.state().checked).toEqual(false);
    wrapper.instance().toggleCheck();
    expect(wrapper.state().checked).toEqual(true);
  });
  it('changing the state should cross text', () => {
    const styledText = TestRenderer.create(
      <CheckedText checked={false} />
    ).toJSON();
    expect(styledText).toHaveStyleRule('text-decoration', 'none');

    //didn't found a way to update the proper component using react-test-renderer
    // neither a way to test styled components with enzyme

    const styledText2 = TestRenderer.create(<CheckedText checked />).toJSON();
    expect(styledText2).toHaveStyleRule('text-decoration', 'line-through');
  });
});
