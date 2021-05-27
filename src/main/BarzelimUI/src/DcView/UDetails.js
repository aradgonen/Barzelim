// import { Button } from 'bootstrap';
import React from 'react';
import Button from '@material-ui/core/Button';

function UDetails(props) {
    let dataArray = []
    Object.entries(props.uData).forEach(([key, value]) => {
      if(key !== '_links') {
        if(typeof(value) === 'object'){
          Object.entries(value).forEach(([name,data]) => {
            dataArray.push(<div>{name} : {data}</div>)
          })
        }
        else{
          dataArray.push(<div>{key} : {value}</div>)
        }
      }
    })
    return (
      <>
      {dataArray}
      {/* <Button variant="contained" color="primary">Edit U</Button> */}
      </>
    );
  }

  export default UDetails;