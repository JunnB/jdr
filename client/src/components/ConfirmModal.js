import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import LinkButton from '../layouts/LinkButton';
import { toogleModal } from '../actions/actions';

class ConfirmModal extends Component {

  handleClose = () => {
    var modal = Object.assign({}, this.props.modal);
    modal.show = false;
    this.props.dispatch(toogleModal(modal));
  };

  handleShow = () => {
    var modal = Object.assign({}, this.props.modal);
    modal.show = true;
    this.props.dispatch(toogleModal(modal));
  };

  handleSave = () => {
    this.handleClose();
    this.props.onValidation();
  };

  render() {
    return (
      <div>
        <button className="App-btn App-btn-small" onClick={this.handleShow}>
          {this.props.btnModalLabel}
        </button>
        <Modal show={this.props.modal.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.content}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <LinkButton
              to={this.props.redirect_to}
              label={this.props.btnModalLabel}
              className="App-btn App-btn-small"
              onClick={event => this.handleSave(event)}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal.modal
  };
}
export default connect(mapStateToProps)(ConfirmModal);
