import React from 'react';
import {Card} from 'react-bootstrap'

const products = [{id:0,name:'Cisco-Nexus 5000'},{id:1,name:'NetApp-A300N1-2'},{id:2,name:'NetApp-A300N1-2'},{id:3,name:'Barzelim'},{id:4,name:'NetApp-A300N3-4'},{id:5,name:'NetApp-A300N3-4'},{id:6,name:'Cisco-UCS-C220M5'},{id:7,name:'Cisco-UCS-C220M5'},{id:8,name:'ProjectX'},{id:9,name:''},{id:10,name:''},{id:11,name:''},{id:12,name:''},{id:13,name:''},{id:14,name:''},{id:15,name:''}];

class Racktable extends React.Component {
    render() {
        return (
            <Card>
            <Card.Body>
              <Card.Title>Rack #1</Card.Title>
              <Card.Text>
               NetApp - Secret
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
}

export default Racktable;