/* @flow */

import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Card from 'material-ui/Card';

import styled from 'styled-components';

//using external inline-style to minimize re-render problems
const cardStyle = {
  externalStyle: {
    width: '75%',
    margin: 'auto',
  },
  containerStyle: {
    marginBottom: '15px',
  },
};

const checkBoxStyle = {
  checkBox: {
    width: '24px',
    height: '24px',
    marginRight: '20px',
  },
  selectedColor: {
    fill: '#ed7224',
  },
};

const buttonStyle = {
  padding: '0px',
  margin: 'auto',
};

const iconStyle = {
  iconHoverColor: '#ed7224',
};

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  flex: 1 1 auto;
`;

const CheckedText = styled.span`
  flex: 1 1 auto;
  text-decoration: line-through;
`;

type Props = {
  text: string,
  remove: Function,
};

type State = {
  checked: boolean,
};

class TodoContainer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      checked: false,
    };
  }

  updateCheck() {
    let newState = this.state.checked;
    this.setState({
      checked: !newState,
    });
  }

  toggleTextRender() {
    return this.state.checked ? <CheckedText>{this.props.text}</CheckedText> : <Text>{this.props.text}</Text>;
  }

  render() {
    return (
      <div>
        <Card style={cardStyle.externalStyle} containerStyle={cardStyle.containerStyle}>
          <ItemWrapper>
            <Checkbox
              style={checkBoxStyle.checkBox}
              iconStyle={checkBoxStyle.selectedColor}
              checked={this.state.checked}
              onCheck={this.updateCheck.bind(this)}
            />
            {this.toggleTextRender()}
            <IconButton
              iconClassName="material-icons"
              style={buttonStyle}
              iconStyle={iconStyle}
              onClick={this.props.remove}>
              clear
            </IconButton>
          </ItemWrapper>
        </Card>
      </div>
    );
  }
}

export default TodoContainer;
