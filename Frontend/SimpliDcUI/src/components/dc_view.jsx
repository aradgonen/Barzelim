import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {CardColumns,Container, Col} from 'react-bootstrap'

import RackCard from './rack_card'
import DetailedRackCard from './detailed_rack_card'

function DcView(props) {
  return(
      <Router>
        <Switch>
              <Route path="/rack/edit/:id" render={() =>renderSingleRackEdit()}/>
              <Route path="/rack/:id" render={(routerProps) => RenderSingleRack(props.dc.find(rack=> rack.rack_id==routerProps.match.params.id))}/>
              <Route exact path="">
              <Container>
                <Col>
                  <CardColumns>
                  <RackCard data={props}/>
                  </CardColumns>
                  </Col>
                  <Col>
                  </Col>
              </Container>
              </Route>
        </Switch>
      </Router>
    )
}
function RenderSingleRack(rack){
  return(
    <DetailedRackCard rack={fillReservedU(rack)}/>
  )
}
function renderSingleRackEdit(){
  return(<rackEdit></rackEdit>)
}
function fillReservedU(rack){
  if(rack !== undefined)
  rack.data.forEach((u, index) => {
    if(u.data.size > 1){
      for(let i=1;i<u.data.size;i++){
        rack.data[index-i].data.reserved = true
      }
    }
  });
  return rack
}
  export default DcView;