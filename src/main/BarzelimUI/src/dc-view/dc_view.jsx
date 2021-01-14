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
import DetailedRackCard from './detailed_rack_card'
import ReactDOM from 'react-dom'

function DcView(props) {
  return(
      <Router>
        <Switch>
              <Route exact path="">
              <Container>
                <CardColumns>
                <RackCard data={props}/>
                </CardColumns>
              </Container>
              </Route>
              <Route exact path="/rack/:id" component={() => <DetailedRackCard rack={""}/>}/>
              {/* props.dc.find(rack=> rack.rack_id=id))}/> */}
        </Switch>
      </Router>
    )
}
  export default DcView;