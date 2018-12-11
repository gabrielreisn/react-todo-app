/* @flow */

import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Card from 'material-ui/Card';

import styled from 'styled-components';

import { cardStyle, checkBoxStyle, buttonStyle, iconStyle } from './styles';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckedText = styled.span`
  flex: 1 1 auto;
  text-decoration: ${props => (props.checked ? 'line-through' : '')};
`;

type Props = {
  text: string,
  onRemove: (element: number) => void,
};

type State = {
  checked: boolean,
};

class TodoItem extends React.Component<Props, State> {
  state = {
    checked: false,
  };

  toggleCheck = (): void => {
    this.setState(prevState => {
      return {
        checked: !prevState.checked,
      };
    });
  };

  render(): React.Node {
    const { checked } = this.state;
    const { onRemove, text } = this.props;

    return (
      <Card
        style={cardStyle.externalStyle}
        containerStyle={cardStyle.containerStyle}
      >
        <ItemWrapper>
          <Checkbox
            style={checkBoxStyle.checkBox}
            iconStyle={checkBoxStyle.selectedColor}
            checked={checked}
            onCheck={this.toggleCheck}
          />
          <CheckedText checked={checked}>{text}</CheckedText>
          <IconButton
            iconClassName="material-icons"
            style={buttonStyle}
            iconStyle={iconStyle}
            onClick={onRemove}
          >
            clear
          </IconButton>
        </ItemWrapper>
      </Card>
    );
  }
}

export default TodoItem;
