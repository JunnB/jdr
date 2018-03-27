import React, { Component } from 'react';
import { withRouter } from 'react-router';

class LinkButton extends Component {
  getStyle() {
    var style = {};
    if (this.props.style) {
      style = this.props.style;
    }
    return style;
  }
  render() {
    return (
      <button
        className={this.props.className}
        style={this.getStyle()}
        onClick={event => {
          this.props.onClick && this.props.onClick(event);
          this.props.history.push(this.props.to);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

export default withRouter(LinkButton);
