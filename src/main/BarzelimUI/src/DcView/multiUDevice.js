import React from 'react';
import UDetails from './UDetails';
import UConnectionInfo from './UConnectionInfo';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { Fragment } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MultiUDevice({u, upperUNumber, bottomUNumber, type, handleModal,  numberOfU}) {
    const TopU = withStyles((theme) => ({
        root: {
            borderBottom: "none"
        },
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      const MidU = withStyles((theme) => ({
        root: {
            borderBottom: "none",
            borderTop: "none"
        },
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      const BottomU = withStyles((theme) => ({
        root: {
            borderTop: "none"
        },
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      const SideTableCell = withStyles((theme) => ({
        body: { 
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
      }))(TableCell);  
      const useStyles = makeStyles({
        table: {   
        },
        Card:{
          width:"50%",
          alignItems:"center"
        },
      });


  const classes = useStyles();

  function MultiUDeviceCreation() {
    let rowContent = new Array(numberOfU);
        rowContent[0] =  
            <TableRow>
                <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
                <TopU align="center" onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}>{u.name}</TopU>
                <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>
            </TableRow>

        rowContent[rowContent.length - 1] =  
            <TableRow>
                <SideTableCell align="center" width="3%">{bottomUNumber}</SideTableCell>
                <BottomU align="center" onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}></BottomU>
                <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{bottomUNumber}</SideTableCell>
            </TableRow>    
        
        // for each U - between the Top and Bottom (not include them) create the rows
        for (let rowIndex = 1; rowIndex < numberOfU -1 ; rowIndex++) {
            rowContent[rowIndex] =  
            <TableRow>
                <SideTableCell align="center" width="3%">{upperUNumber - rowIndex}</SideTableCell>
                <MidU align="center" onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}></MidU>
                <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber - rowIndex}</SideTableCell>
            </TableRow>    
        }
    return (
      <Fragment>{rowContent}</Fragment>
        
    );
  }

  return (
      <MultiUDeviceCreation></MultiUDeviceCreation>
  );
}