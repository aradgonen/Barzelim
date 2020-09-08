import React, {Component} from 'react';
import './App.css';
import Racktable from './rack-table/racktable';
import TopNav from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataReciver from './utilities/dataReciver' //use import instead of require because auto build is stupid

//const DC = require('../src/rack-table/dc')
let DC = [];


//https://github.com/arnab-datta/counter-app/blob/master/src/App.js
class App extends Component {
  state = {
    searchTerm : "",
    searchResults : []
  };

  handleChange = event => {
    let state_ = {...this.state}
    console.log(event.target.value)
    state_.searchTerm = event.target.value
    state_.searchResults = DC.filter(rack =>
      JSON.stringify(rack).toLowerCase().includes(state_.searchTerm.toLowerCase().trim()));
    this.setState(state_)
  };

  async componentWillMount() {
    // TODO - set the real data in the state
    let state_ = {...this.state}
    state_.searchResults = DC;
    this.setState(state_)

    let devices = await dataReciver.getDevices()
    let racks = await dataReciver.getRacks()
    DC = await dataReciver.createDc(racks, devices)

    state_ = {...this.state}
    state_.searchResults = DC;
    this.setState(state_)
    console.log(devices)
    console.log(racks)
  }

  render() {
    return (
      <React.Fragment>
        <TopNav></TopNav>
        <input type="text" placeholder="Type any vaule to search in the DC..." value={this.state.searchTerm} onChange={this.handleChange}/>
        <Racktable dc={this.state.searchResults}></Racktable>
      </React.Fragment>
    )}
  }

export default App;