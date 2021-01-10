import React, {Component} from 'react';
import './App.css';
import Racktable from './rack-table/racktable';
import TopNav from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataReciver from './utilities/dataReciver' //use import instead of require because auto build is stupid
import FirstTimePage from './FirstTimePage/FirstTImePage'
import Cookies from 'js-cookie'
const config = require('./config.json');

//const DC = require('../src/rack-table/dc')
let DC = [];
let counter = 0;


//https://github.com/arnab-datta/counter-app/blob/master/src/App.js
class App extends Component {
  state = {
    searchTerm : "",
    searchResults : [],
    showFirstTimeScreen: false
  };


  handleChange = event => {
    let state_ = {...this.state}
    console.log(event.target.value)
    state_.searchTerm = event.target.value
    state_.searchResults = DC.filter(rack =>
      JSON.stringify(rack).toLowerCase().includes(state_.searchTerm.toLowerCase().trim()));
    this.setState(state_)
  };

  showFirstTimeScreenHandler = () => {
    let state_ = {...this.state}
    state_.showFirstTimeScreen = true
    this.setState(state_)
  }

  hideFirstTimeScreenHandler = () => {
    let state_ = {...this.state}
    state_.showFirstTimeScreen = false
    this.setState(state_)
  }

  async componentWillMount() {

    // TODO - set the real data in the state
    // state_.searchResults = DC;
    // this.setState(state_)

    let devices = await dataReciver.getDevices()
    let racks = await dataReciver.getRacks()
    DC = await dataReciver.createDc(racks, devices)

    let state_ = {...this.state}
    state_.searchResults = DC;
    this.setState(state_)
    console.log(devices)
    console.log(racks)
    console.log(DC)
    
    
    // this happens LAST insted of FIRST becuase it async - WE NEED TO FIX THIS!!!!!!!
    console.log("in will mount")
    console.log(`value of first time = ${Cookies.get(`firstTime${config.version}`)}`)
    console.log(`state show first time = ${this.state.showFirstTimeScreen}`)

  }

  componentDidMount() {
    if(Cookies.get(`firstTime${config.version}`) === undefined) {
      Cookies.set(`firstTime${config.version}`, false, { expires: 365 })
      this.showFirstTimeScreenHandler()
    }

    console.log("in did mount")
    console.log(`value of first time = ${Cookies.get(`firstTime${config.version}`)}`)
    console.log(`state show first time = ${this.state.showFirstTimeScreen}`)

  }

  render() {
    console.log("in render")
    console.log(`value of first time = ${Cookies.get(`firstTime${config.version}`)}`)
    console.log(`state show first time = ${this.state.showFirstTimeScreen}`)

    let popUp
    if(this.state.showFirstTimeScreen === true) {
      console.log("in render - show first time is true!, counter = " + counter)
      counter++
      popUp = <FirstTimePage show={this.props.showFirstTimeScreen} hide={this.hideFirstTimeScreenHandler}/>
    } else {
      console.log("in render - show first time is false!, counter = " + counter)
      counter++
      popUp = <div></div>
    }
    let dcRackView = <React.Fragment>
                        <TopNav></TopNav>
                        {popUp}
                        <input type="text" placeholder="Type any vaule to search in the DC..." value={this.state.searchTerm} onChange={this.handleChange}/>
                        <Racktable dc={this.state.searchResults}></Racktable>
                      </React.Fragment>

    return (
      dcRackView
    )}
  }

export default App;