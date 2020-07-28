import Modal from "react-bootstrap/Modal";
import {Button, Dropdown} from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class UModal extends React.Component {
  openssh = () =>{
    let link = this.props.uData.name
    window.open("ssh://"+link , link);
  };
    render() {
        return (
            <Modal show={this.props.show}  animation={true} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
              <Modal.Title>More Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>Name: {this.props.uData.name}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.hide}>
                Close
              </Button>
              <Button variant="info" onClick={this.openssh}>
                Open SSH Connection
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }
}
export default UModal;