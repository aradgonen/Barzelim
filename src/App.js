import React from 'react';
import './App.css';
import Racktable from './rack-table/racktable';
import TopNav from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const DC = require('../src/rack-table/dc');
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = DC.filter(rack =>
      JSON.stringify(rack).toLowerCase().includes(searchTerm.toLowerCase().trim()));
    setSearchResults(results);
  }, [searchTerm]);
 
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <input type="text" placeholder="Type any vaule to search in the DC..." value={searchTerm} onChange={handleChange}/>
      <Racktable dc={searchResults}></Racktable>
    </React.Fragment>
  );
}
export default App;
