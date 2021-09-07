import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


 class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>       
            </>
        )
    }
}

export default SelectedBeast
