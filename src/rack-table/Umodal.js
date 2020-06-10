import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class UModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show}  animation={true}>
            <Modal.Header>
              <Modal.Title>More Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>{JSON.stringify(this.props.uData)}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.hide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }
}
export default UModal;