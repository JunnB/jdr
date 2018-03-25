import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LinkButton from './LinkButton';

class ConfirmModal extends Component {
  onSave = event => {
    this.props.handleSave(event);
    this.props.onValidation();
  };

  render() {
    return (
      <div>
        <button
          className="App-btn App-btn-small"
          onClick={this.props.handleShow}
        >
          {this.props.btnModalLabel}
        </button>
        <Modal show={this.props.modal.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.content}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
            <LinkButton
              to={this.props.redirect_to}
              label={this.props.btnModalLabel}
              className="App-btn App-btn-small"
              onClick={event => this.onSave(event)}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ConfirmModal;
