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
      console.log('in modal')

      // Name: {this.props.uData.name}</Modal.Body>
      let dataArray = []
      Object.entries(this.props.uData).forEach(([key, value]) => {
        if(key !== '_links') {
          dataArray.push(<div>{key} : {value}</div>)
        }
      })

      let _modal =
          <Modal show={this.props.show}  animation={true} aria-labelledby="contained-modal-title-vcenter"
          centered>
            <Modal.Header>
              <Modal.Title>More Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {dataArray}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
            <Button variant="info" onClick={this.openssh}>
              Open SSH Connection
            </Button>
          </Modal.Footer>
        </Modal>
  
        console.log('_modal')
        console.log(_modal)
        console.log(this.props)
        return (
          _modal
        );
      }
}
export default UModal;