import * as React from 'react';
import { shallow } from 'enzyme';

import TodoContainer from '../TodoContainer';

describe('<TodoContainer />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TodoContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render some TodoItem based on state', () => {
    const wrapper = shallow(<TodoContainer />);
    const event = { key: 'Enter', preventDefault: jest.fn() };

    wrapper.setState({
      textField: 'clean the cat shit',
    });

    wrapper.instance().handleKeyPress(event);
    expect(wrapper.find('TodoItem')).toBeTruthy();
  });
  it('handleChange should change the text state', () => {
    const wrapper = shallow(<TodoContainer />);
    expect(wrapper.state().textField).toEqual('');
    wrapper
      .instance()
      .handleChange({ currentTarget: { value: 'horsin around' } });

    expect(wrapper.state().textField).toEqual('horsin around');
  });
  it('deleteElement should remove item and re-render the list', () => {
    const wrapper = shallow(<TodoContainer />);
    const previousState = [
      { key: 1, text: 'clean house' },
      { key: 2, text: 'feed cat' },
      { key: 3, text: 'make cofee' },
    ];

    const nextState = [
      { key: 2, text: 'feed cat' },
      { key: 3, text: 'make cofee' },
    ];

    wrapper.setState({
      todoText: previousState,
    });

    wrapper.instance().deleteElement(1);
    expect(wrapper.state().todoText).toEqual(nextState);
  });
});
