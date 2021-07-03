import React from 'react';
import {useHistory} from "react-router-dom";
import {Card} from 'react-bootstrap'
import rack_icon from '../images/rack.svg'
function RackCard(props){

    let _history = useHistory()
      return props.data.dc.map(rack => {
      return(
        <Card className="ml-auto mr-auto text-center" onClick={()=>handleRackClick(rack.rack_id)} key={rack.rack_id}>  
          <Card.Body key = {rack.rack_id}>
            <Card.Title>Rack #{rack.rack_id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{rack.network}</Card.Subtitle>
                <img src={rack_icon} width="40%%" height="40%" alt={""}/>
          </Card.Body>
        </Card>
  
      )
    })
    function handleRackClick(rack_id) {
        _history.push(`/rack/${rack_id}`);
      }
  }

export default RackCard