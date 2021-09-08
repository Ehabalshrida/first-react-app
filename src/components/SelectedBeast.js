import React, { Component } from 'react'
import { Modal, Button ,Image } from 'react-bootstrap'


 class SelectedBeast extends Component {
    render() {
      console.log(this.props)
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Image  src={this.props.image_url}/>
            {this.props.description}
            
            </Modal.Body>
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