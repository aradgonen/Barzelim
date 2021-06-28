import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import {CardColumns,Card,Table,Container, Col} from 'react-bootstrap'
import rack_icon from '../images/rack.svg'
import RackCard from './rack_card'
import DetailedRackCard from './detailed_rack_card'
import ReactDOM from 'react-dom'
import rackEdit from './rackEdit'
function DcView(props) {
  return(
      <Router>
        <Switch>
              <Route path="/rack/edit/:id" render={(routerProps) => {renderSingleRackEdit()}}/>
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