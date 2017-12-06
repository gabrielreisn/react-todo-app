import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

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
  },
  selectedColor: {
    fill: '#ed7224',
  },
};

const dividerStyle = {
  marginBottom: '10px',
};

class TodoContainer extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyle.externalStyle} containerStyle={cardStyle.containerStyle}>
          <CardHeader
            title="Todo card"
            actAsExpander={true}
            showExpandableButton={true}
            textStyle={cardStyle.textStyle}
            children={<Checkbox style={checkBoxStyle.checkBox} iconStyle={checkBoxStyle.selectedColor} />}
            style={cardStyle.cardHeader}
          />

          <CardText expandable={true}>
            <Divider style={dividerStyle} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
            Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
            dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default TodoContainer;
