import React from 'react';
import {Card,Table, Container, Row} from 'react-bootstrap'
const DC = require('./dc');

class Racktable extends React.Component {
   state = {}
    renderRack(){
      return DC.map(rack => {
        return(
          <Card className="ml-auto mr-auto">
            <Card.Body>
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
                      {this.renderU(rack)}
                  </Table>
            </Card.Body>
          </Card>

        )
      })
        
    }
    renderU(rack){
      return rack.data.map((u,index) => {
        return(
          <tbody>
                <tr>
                  <td bgcolor="#000000" width="3%" >{index}</td>
                  <td align='center'>{u.name} </td>
                  <td bgcolor="#000000" width="3%">{index}</td>
                </tr>
          </tbody>
        )
      })
    }
    render() {
        return (
          <Container>
            <Row xs='4'>
            {this.renderRack()}
          </Row>
          </Container>
              

        );
      }
}

export default Racktable;