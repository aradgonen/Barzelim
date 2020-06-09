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
      JSON.stringify(rack).toLowerCase().includes(searchTerm.trim()));
    setSearchResults(results);
  }, [searchTerm]);
 
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <input
  type="text"
  placeholder="Type here..."
  value={searchTerm}
  onChange={handleChange}
  />
      <Racktable dc={searchResults}></Racktable>
    </React.Fragment>
  );
}
export default App;
