import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import {CardColumns,Card,Table,Container, Col} from 'react-bootstrap'
import rack_icon from './rack.svg'
import RackCard from './rack_card'
import DetailedRackCard from './detailed_rack_card'
import ReactDOM from 'react-dom'

function DcView(props) {
  return(
      <Router>
        <Switch>
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
              {/* props.dc.find(rack=> rack.rack_id=id))}/> */}
        </Switch>
      </Router>
    )
}
function RenderSingleRack(rack){
  return(
    <DetailedRackCard rack={rack}/>
  )
}
  export default DcView;