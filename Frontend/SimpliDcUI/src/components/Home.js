import React from "react";
import DcView from '../components/dc_view';
import { useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  let dc = useSelector((state) => state.dc);
  let searchTerm = useSelector((state) => state.search);
  console.log(searchTerm);
  
  return (
      <DcView dc={(searchTerm.length!=0?(dc.filter(rack =>
JSON.stringify(rack).toLowerCase().includes(searchTerm.toLowerCase().trim()))):(dc))}>
      </DcView>
  );
};

export default Home;
