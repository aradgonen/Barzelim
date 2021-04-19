import React from 'react';

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
      </>
    );
  }

  export default UDetails;