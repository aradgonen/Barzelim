import Modal from "react-bootstrap/Modal";
import {Button, Dropdown} from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ResponsiveNeoGraph} from "../components/NeoGraph.js"
class UModal extends React.Component {
  openssh = () =>{
    let link = this.props.uData.name
    window.open("ssh://"+link , link);
  };
  componentDidCatch(error){
    console.log()
  }
    render() {

      // Name: {this.props.uData.name}</Modal.Body>
      let dataArray = []
      try{
        Object.entries(this.props.uData).forEach(([key, value]) => {
          if(key !== '_links') {
            if(typeof(value) === 'object'){
              Object.entries(value).forEach(([name,data]) => {
                dataArray.push(<div>{name} : {data}</div>)
              })
            }
            else{
              dataArray.push(<div>{key} : {value}</div>)
            }
          }
        })
      }
      catch(error){
        console.log()
      }

      try{
        let _modal =
<Modal show={this.props.show}  animation={true} aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header>
            <Modal.Title>More Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {dataArray}
          <ResponsiveNeoGraph
        containerId={"neo4j"}
        neo4jUri={"bolt://localhost:7687"}
        neo4jUser={"neo4j"}
        neo4jPassword={"shMador1"}
        neo4jcommand={`MATCH (a {serialNumber: "${this.props.uData.serialNumber}"})-[r]-(b) RETURN r, b,a`}
      />
      

      
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
        

      return _modal
      }
      catch(error){
        console.error()
      }
    }
}
export default UModal;