import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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
          <Col xs={6} xsOffset={3}>
            <div className="genericBlock">{this.props.children}</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GenericBlock;
