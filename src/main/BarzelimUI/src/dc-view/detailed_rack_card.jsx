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

function DetailedRackCard(rack){
    console.log(rack)
      return(
        <Container>
        <CardColumns> 
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
                    {renderU(rack)}
                </Table>
          </Card.Body>
        </Card>
        </CardColumns>
        </Container>
  
      )
    }
  function renderU(rack){
    if(rack !== undefined)
    {
      let rackContent = rack.data.reverse()
      return rackContent.map((u,index) => {
        return(
          <tbody>
                <tr>
                  <td bgcolor="#000000" width="3%" >{rack.data.length - index}</td>
                  <td align='center' onClick={() => this.openInfoModal(u)}>{u.name}</td>
                  <td bgcolor="#606060" width="3%" onClick={() => this.openDeviceConnectionModal(u)}>{rack.data.length - index}</td>
                </tr>
          </tbody>
        )
      })
    }
  
  }
  export default DetailedRackCard;