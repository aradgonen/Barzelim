import React from 'react';
import {Card,Table, CardDeck} from 'react-bootstrap'

const DC = [{rack_id:3001,network:"Secret", brief:"Netapp,Cisco,UCS,Network" ,data:[{id:0,name:'Cisco-Nexus 5000'},{id:1,name:'NetApp-A300N1-2'},{id:2,name:'NetApp-A300N1-2'},{id:3,name:'Barzelim'},{id:4,name:'NetApp-A300N3-4'},{id:5,name:'NetApp-A300N3-4'},{id:6,name:'Cisco-UCS-C220M5'},{id:7,name:'Cisco-UCS-C220M5'},{id:8,name:'ProjectX'},{id:9,name:''},{id:10,name:''},{id:11,name:''},{id:12,name:''},{id:13,name:''},{id:14,name:''},{id:15,name:''}]},{rack_id:3001,network:"HalfSecret", brief:"Netapp,Cisco,UCS,Network" ,data:[{id:0,name:'Cisco-Nexus 5000'},{id:1,name:'NetApp-A300N1-2'},{id:2,name:'NetApp-A300N1-2'},{id:3,name:'Barzelim'},{id:4,name:'NetApp-A300N3-4'},{id:5,name:'NetApp-A300N3-4'},{id:6,name:'Cisco-UCS-C220M5'},{id:7,name:'Cisco-UCS-C220M5'},{id:8,name:'ProjectX'},{id:9,name:''},{id:10,name:''},{id:11,name:''},{id:12,name:''},{id:13,name:''},{id:14,name:''},{id:15,name:''}]},{rack_id:3009,network:"NoSecret", brief:"Netapp,Cisco,UCS,Network" ,data:[{id:0,name:'Cisco-Nexus 5000'},{id:1,name:'NetApp-A300N1-2'},{id:2,name:'NetApp-A300N1-2'},{id:3,name:'Barzelim'},{id:4,name:'NetApp-A300N3-4'},{id:5,name:'NetApp-A300N3-4'},{id:6,name:'Cisco-UCS-C220M5'},{id:7,name:'Cisco-UCS-C220M5'},{id:8,name:'ProjectX'},{id:9,name:''},{id:10,name:''},{id:11,name:''},{id:12,name:''},{id:13,name:''},{id:14,name:''},{id:15,name:''}]},{rack_id:3001,network:"Secret", brief:"Netapp,Cisco,UCS,Network" ,data:[{id:0,name:'Cisco-Nexus 5000'},{id:1,name:'NetApp-A300N1-2'},{id:2,name:'NetApp-A300N1-2'},{id:3,name:'Barzelim'},{id:4,name:'NetApp-A300N3-4'},{id:5,name:'NetApp-A300N3-4'},{id:6,name:'Cisco-UCS-C220M5'},{id:7,name:'Cisco-UCS-C220M5'},{id:8,name:'ProjectX'},{id:9,name:''},{id:10,name:''},{id:11,name:''},{id:12,name:''},{id:13,name:''},{id:14,name:''},{id:15,name:''}]}];

class Racktable extends React.Component {
    renderRack(){
      return DC.map(rack => {
        return(
          <Card style={{width: '18rem' }}>
            <Card.Body>
              <Card.Title>Rack #{rack.rack_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{rack.network}</Card.Subtitle>
                  <Table responsive hover borderless> 
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
            <CardDeck>
              {this.renderRack()}
            </CardDeck>
        );
      }
}

export default Racktable;