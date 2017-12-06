import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Card from 'material-ui/Card';

import '../css/App.css';

//using external inline-style to minimize re-render problems
const cardStyle = {
  externalStyle: {
    width: '75%',
    margin: 'auto',
  },
  containerStyle: {
    marginBottom: '15px',
  },
  textStyle: {
    padding: '0px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
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

class TodoContainer extends Component {
  constructor() {
    super();

    this.updateCheck = this.updateCheck.bind(this);
    this.toggleTextRender = this.toggleTextRender.bind(this);

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
    return this.state.checked ? (
      <span className="item-wrapper-text-checked">Todo Card</span>
    ) : (
      <span className="item-wrapper-text">Todo Card</span>
    );
  }

  render() {
    return (
      <div>
        <Card style={cardStyle.externalStyle} containerStyle={cardStyle.containerStyle}>
          <div className="item-wrapper">
            <Checkbox
              style={checkBoxStyle.checkBox}
              iconStyle={checkBoxStyle.selectedColor}
              checked={this.state.checked}
              onCheck={this.updateCheck}
            />
            {this.toggleTextRender()}
            <IconButton iconClassName="material-icons" style={buttonStyle} iconStyle={iconStyle}>
              clear
            </IconButton>
          </div>
        </Card>
      </div>
    );
  }
}

export default TodoContainer;
