import Modal from "react-bootstrap/Modal";
import {Button, Dropdown} from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class UModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show}  animation={true} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
              <Modal.Title>More Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>{JSON.stringify(this.props.uData)}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.hide}>
                Close
              </Button>
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

          <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Open SSH Connection</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Modal.Footer>
          </Modal>
        );
      }
}
export default UModal;