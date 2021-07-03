import React, { useState, useEffect } from "react";

import DataService from "../services/data.service";

import FirstTimePage from '../components/FirstTImePage';
import DcView from '../components/dc_view';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dc, setDc] = useState([]);
  useEffect(() => {
      DataService.getDevices().then(
        (devicesResponse) =>{
          DataService.getRacks().then(
            (racksResponse) =>{
              setDc(DataService.getDc(racksResponse,devicesResponse))
            }
          )
        }
      )
  }, []);
  return (
    <React.Fragment>

                        <input className="" type="text" placeholder="Type any vaule to search in the DC..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                          <DcView dc={(searchTerm.length!==0?(dc.filter(rack =>
      JSON.stringify(rack).toLowerCase().includes(searchTerm.toLowerCase().trim()))):(dc))}></DcView>

                      </React.Fragment>
  );
};

export default Home;
