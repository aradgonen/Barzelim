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
function RackCard(props){
    let history = useHistory()
    // console.log(props)
    return props.data.dc.map(rack => {
      return(
        <Card className="ml-auto mr-auto text-center" onClick={()=>handleRackClick(rack.rack_id)}>  
          <Card.Body key = {rack.rack_id}>
            <Card.Title>Rack #{rack.rack_id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{rack.network}</Card.Subtitle>
                <img src={rack_icon} width="40%%" height="40%"/>
          </Card.Body>
        </Card>
  
      )
    })
    function handleRackClick(rack_id) {

        // console.log("CLICKED")
        history.push(`/rack/${rack_id}`);
      }
  }

export default RackCard