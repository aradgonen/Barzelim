import React from 'react';
import {CardColumns,Container, Col} from 'react-bootstrap'

import RackCard from './rack_card'

function DcView(props) {
  return(
    <Container>
    <Col>
      <CardColumns>
      <RackCard data={props}/>
      </CardColumns>
      </Col>
      <Col>
      </Col>
  </Container>
    )
}
  export default DcView;