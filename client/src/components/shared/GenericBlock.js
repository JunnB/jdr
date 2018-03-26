import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import GenericPanel from '../../containers/GenericPanelContainer';
class GenericBlock extends Component {
  allScreenHeight() {

    if (this.props.allScreenHeight) {
      return 'allScreenHeight';
    } else {
      return '';
    }
  }

  render() {
    return (
      <Grid className={this.allScreenHeight()}>
        <Row className="show-grid">
          <Col xs={8} xsOffset={2}>
            <GenericPanel defaultOpen={this.props.defaultOpen} title={this.props.title}>
              {this.props.children}
            </GenericPanel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GenericBlock;
