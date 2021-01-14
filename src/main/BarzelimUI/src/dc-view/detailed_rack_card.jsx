import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import {CardColumns,Card,Table,Container} from 'react-bootstrap'
import rack_icon from './rack.svg'
import RackCard from './rack_card'
import { ModalProvider } from './modalContext'
import { ModalContext } from './modalContext'
import {ResponsiveNeoGraph} from "../components/NeoGraph.js"

function DetailedRackCard(rack){
  let { handleModal } = React.useContext(ModalContext);
  try{
    if(rack !== undefined){
      rack=rack.rack
        return(
          <ModalProvider>
          <Container>
          <Card className="ml-auto mr-auto">
            <Card.Body key = {rack.rack_id}>
              <Card.Title>Rack #{rack.rack_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{rack.network}</Card.Subtitle>
                  <Table responsive hover borderless > 
                    <thead>
                      <tr>
                        <th bgcolor="#000000" width="3%"></th>
                        <th bgcolor="#000000"></th>
                        <th bgcolor="#000000" width="3%"></th>
                      </tr>
                    </thead>
                      {renderU(rack,handleModal)}
                  </Table>
            </Card.Body>
          </Card>
          </Container>
          </ModalProvider>
    
        )
      }
  }
  catch{
    console.log("BLA")
    return(
      <div></div>
    )
  }

    }
  function renderU(rack,handleModal){
      let rackContent = rack.data.reverse()
      return rackContent.map((u,index) => {
        return(

          <tbody>
                <tr>
                  <td bgcolor="#000000" width="3%" >{rack.data.length - index}</td>
                  <td align='center' onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}>{u.name}</td>
                  <td bgcolor="#606060" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{rack.data.length - index}</td>
                </tr>
          </tbody>

        )
      })
  
  }
  function UDetails(props) {
    let dataArray = []
    Object.entries(props.uData).forEach(([key, value]) => {
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
    return (
      <>
      {dataArray}
      </>
    );
  }
  function UConnectionInfo(props) {
    return (
      <>
        <ResponsiveNeoGraph id="neo4j"
          containerId={"neo4j"}
          neo4jUri={"bolt://localhost:7687"}
          neo4jUser={"neo4j"}
          neo4jPassword={"shMador1"}
          neo4jcommand={`MATCH (a {serialNumber: "${props.uData.serialNumber}"})-[r]-(b) RETURN r, b,a`}
        />
      </>
    );
  }
  export default DetailedRackCard;