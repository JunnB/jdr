import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class GenericPanel extends Component {
  componentDidMount(props, context) {
    if (this.props.defaultOpen) {
      this.props.openPanel(this.props.defaultOpen);
    }
  }

  getBsStyle(){
    var bsStyle = 'info'
    if(this.props.titleColor){
      bsStyle = this.props.titleColor;
    }
    return bsStyle;
  }

  render() {
    return (
      <Panel
        style={{ marginTop: '20px' }}
        className="text-center"
        bsStyle={this.getBsStyle()}
        defaultExpanded={this.props.defaultOpen}
      >
        <Panel.Heading>
          <Panel.Title componentClass="h3" toggle>
            {this.props.title}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <div>{this.props.children}</div>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

export default GenericPanel;
