import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';
import UModal from './Umodal';
import rack_34u from './rack_34u.png';



class Racktable extends React.Component {

  state = { showInfoModal: false , showDeviceConnectionModal: false, curU:''};

  showInfoModal = (u) => {
    this.setState({ showInfoModal: true , curU: u, showDeviceConnectionModal:false});
  };
  showDeviceConnectionModal = (u) => {
    this.setState({ showDeviceConnectionModal: true , curU: u, showInfoModal: false});
  };
  hideModal = () => {
    this.setState({ showInfoModal: false, showDeviceConnectionModal: false });
  };
  
    renderRack(){
      return this.props.dc.map(rack => {
        return(
<div></div>

        )
      })
        
    }
    renderU(rack){
      let rackContent = rack.data.reverse()
      return rackContent.map((u,index) => {
        if(u.formFactor == "blade"){

            if(u.vendor == "hp"){
              //if its hp blade, so put it in a rack in the appropiet size

            }
            if(u.vendor == "cisco"){
              //if its cisco blade, so put it in a rack in the appropiet size
            }
            if(u.vendor == "ibm"){
              //if its ibm blade, so put it in a rack in the appropiet size
            }
        }
        else{
        return(
<div></div>
        )
        }
      })
    }
    openInfoModal(u){
      if(this.state.showInfoModal){
        this.hideModal();
      }
      else{
        this.showInfoModal(u);
      }
    }
    openDeviceConnectionModal(u){
      if(this.state.showDeviceConnectionModal){
        this.hideModal();
      }
      else{
        this.showDeviceConnectionModal(u);
      }
    }
    render() {
      let modal;
      if(this.state.showDeviceConnectionModal)
      {
        modal = <UModal show={this.state.showDeviceConnectionModal} uData = {this.state.curU} hide = {this.hideModal} showconnections = {this.state.showDeviceConnectionModal}></UModal>
      }
      else{
        modal = <UModal show={this.state.showInfoModal} uData = {this.state.curU} hide = {this.hideModal}></UModal>
          
      }
        return (
          <Container align="center">
            <Row xs='4'>
            {this.renderRack()}
          </Row>
          {modal}
        </Container>
              

        );
      }
}

export default Racktable;