import Modal from "react-bootstrap/Modal";
import {Button, Dropdown} from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ResponsiveNeoGraph} from "../UI/Components/NeoGraph/NeoGraph.js"
// import { Graph } from 'react-d3-graph';
// const data = {
//   nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
//   links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
// };

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
// const myConfig = {
//   nodeHighlightBehavior: true,
//   node: {
//       color: 'lightgreen',
//       size: 300,
//       highlightStrokeColor: 'blue'
//   },
//   link: {
//       highlightColor: 'lightblue'
//   }
// };
class UModal extends React.Component {
  
  openssh = () =>{
    let link = this.props.uData.name
    window.open("ssh://"+link , link);
  };
  componentDidCatch(error){
    // console.log()
  }
  async getCurUData(uSerialNumber){
    let uData;
    try{
      uData = (await fetch('/neo4j/devices/device/connections/'+uSerialNumber)).json()
    }
    catch{
      // console.log()
    }
    return uData;
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
        // console.log()
      }

      try{
        if(this.props.showconnections){
          let _modal =    <Modal show={this.props.show}  animation={true} aria-labelledby="contained-modal-title-vcenter"
          centered>
            <Modal.Header>
              <Modal.Title>Connection Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <ResponsiveNeoGraph id="neo4j"
          containerId={"neo4j"}
          neo4jUri={"bolt://localhost:7687"}
          neo4jUser={"neo4j"}
          neo4jPassword={"shMador1"}
          neo4jcommand={`MATCH (a {serialNumber: "${this.props.uData.serialNumber}"})-[r]-(b) RETURN r, b,a`}
        />
{/* <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={this.getCurUData(this.props.uData.serialNumber)}
    config={myConfig}
    // onClickNode={onClickNode}
    // onRightClickNode={onRightClickNode}
    // onClickGraph={onClickGraph}
    // onClickLink={onClickLink}
    // onRightClickLink={onRightClickLink}
    // onMouseOverNode={onMouseOverNode}
    // onMouseOutNode={onMouseOutNode}
    // onMouseOverLink={onMouseOverLink}
    // onMouseOutLink={onMouseOutLink}
/>; */}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>      
              return _modal 
        }
        else{
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
                      return _modal
        }

        


      }
      catch(error){
        console.error()
      }
    }
}
export default UModal;