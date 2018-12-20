import * as React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../TodoList';

const props = {
  todoItems: [
    { key: 1, text: 'clean house' },
    { key: 2, text: 'feed cat' },
    { key: 3, text: 'make cofee' },
  ],
  addTodoItem: jest.fn(),
};

describe('<TodoList />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render some TodoItem based on state', () => {
    const wrapper = shallow(<TodoList {...props} />);
    const event = { key: 'Enter', preventDefault: jest.fn() };

    wrapper.setState({
      textField: 'clean the cat shit',
    });

    wrapper.instance().handleKeyPress(event);
    expect(wrapper.find('TodoItem')).toBeTruthy();
  });
  it('handleChange should change the text state', () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper.state().textField).toEqual('');
    wrapper
      .instance()
      .handleChange({ currentTarget: { value: 'horsin around' } });

    expect(wrapper.state().textField).toEqual('horsin around');
  });
});
