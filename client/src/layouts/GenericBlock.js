import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class GenericBlock extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }

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
            <Panel style={{marginTop:'20px'}} className='text-center' bsStyle="info">
              <Panel.Heading>
                <Panel.Title componentClass="h3">{this.props.title}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <div>{this.props.children}</div>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GenericBlock;
