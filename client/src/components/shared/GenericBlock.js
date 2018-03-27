import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import GenericPanel from '../../containers/GenericPanelContainer';

class GenericBlock extends Component {
  getXsCol() {
    var xs = 8;
    if (this.props.xs) {
      xs = this.props.xs;
    }
    return xs;
  }

  getXsOffsetCol() {
    var xsOffset = 2;
    if (this.props.xsOffset || this.props.xsOffset === 0) {
      xsOffset = this.props.xsOffset;
    }
    return xsOffset;
  }

  getGrid() {
    if (this.props.fluid) {
      return <Grid fluid className={this.props.className}>{this.getChildren()}</Grid>;
    }else {
      return <Grid className={this.props.className}>{this.getChildren()}</Grid>;
    }
  }

  getChildren() {
    return(
      <Row className="show-grid">
        <Col xs={this.getXsCol()} xsOffset={this.getXsOffsetCol()}>
          <GenericPanel
            defaultOpen={this.props.defaultOpen}
            title={this.props.title}
          >
            {this.props.children}
          </GenericPanel>
        </Col>
      </Row>
    )
  }

displayGenericBlock(){
  if(this.props.noGrid){
    return this.getChildren();
  }else {
    return(this.getGrid());
  }
}
  render() {

    return (
      this.displayGenericBlock()
    );
  }
}

export default GenericBlock;
