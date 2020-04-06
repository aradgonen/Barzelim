import React from 'react';
import './App.css';
import Racktable from './rack-table/racktable';
import TopNav from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <Racktable></Racktable>
    </React.Fragment>
  );
}
export default App;
