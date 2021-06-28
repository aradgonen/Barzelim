import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import rack_icon from '../images/rack.svg'
import UDetails from './UDetails.js';
import UConnectionInfo from './UConnectionInfo.js';

import { ModalProvider } from '../modal/modalContext.jsx'
import { ModalContext } from '../modal/modalContext.jsx'
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import MultiUDevice from './multiUDevice'

function DetailedRackCard(rack) {
  const StyledTableCell = withStyles((theme) => ({
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
  let { handleModal } = React.useContext(ModalContext);
  try{
    if(rack !== undefined){
      rack=rack.rack
        return(
          <ModalProvider>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center">
              <Card className={classes.Card}>
                <CardContent>
                  <Typography variant="body2" component="p">
                    <TableContainer component={Card}>
                      <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center"/>
                            <StyledTableCell align="center"/>
                            <StyledTableCell align="center"/>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        {renderU(rack,handleModal)}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                  </CardContent>
              </Card>
            </Grid>
          </ModalProvider>

        )
      }
  }
  catch{
    return(
      <div></div>
    )
  }
}

  function renderU(rack,handleModal) {
    const StyledTableCell = withStyles((theme) => ({
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

      let rackContent = rack.data

      // return rackContent.map((u,index) => {
      //   if (u.size !== 1) {
      //     // Create the new multiUDevice
      //   }
      //   return(
      //     <TableRow>
      //     <SideTableCell align="center" width="3%">{rack.data.length - index}</SideTableCell>
      //     <StyledTableCell align="center"onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}>{u.name}</StyledTableCell>
      //     <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{rack.data.length - index}</SideTableCell>
      //   </TableRow>
      //   )
      // })

      let rackComponents = new Array(0);
      let device;
      
      //for (let deviceIndex = 0; deviceIndex < rackContent.length; deviceIndex++) {
        let u_counter = 1;
      rackContent.forEach((u, index) => {
        // console.log("Printing data in creating rack")
        // console.log("index = " + index)
        // console.log("data")
        // console.log(rackContent[index])
        if(u.data.reserved){
          u_counter = u_counter + 1
          return
        }
        if (u.data.size > 1) {
          device = <MultiUDevice
                    u = {u.data}
                    upperUNumber = {index+1}
                    bottomUNumber = {(index+1)-u.data.size+1}
                    type = {""}
                    handleModal = {handleModal}
                    numberOfU = {u.data.size}
                    rack_id={rack.rack_id}
                    />
          // u_counter = u_counter + u.data.size -2
        } else {
          // console.log("rack - " + index + " rack.data.length - " + rack.data.length)
          // let cur_free_u;
          // if(last_big_u !==0){
          //   cur_free_u = index+1
          // }
          // else{
          //   cur_free_u = index+last_big_u-1
          //   if(cur_free_u < 1){cur_free_u = 1}
          // }
          device = <TableRow>
                      <SideTableCell align="center" width="3%">{index+1} </SideTableCell>
                    <StyledTableCell align="center" onClick={() => handleModal(<UDetails rack_id={rack.rack_id} uData={u.data} title={"Detailed Info"}/>)}>{u.data.name}</StyledTableCell>
                      <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo  uData={u.data} title={"Connection Info"}/>)}>{index+1}</SideTableCell>
                    </TableRow>
          u_counter = u_counter + 1
        }
        rackComponents.unshift(device);
      });
      
        
      // for (let rowIndex = 0; rowIndex < rackContent;) {
      //   if(rackContent[rowIndex].size !== 1) {
      //     let multiU = <MultiUDevice></MultiUDevice>
      //     rackContent[rowIndex] = 
      //   }
      // }
      //rackComponents = rackComponents.reverse();
      return rackComponents;
  
  }
  
  export default DetailedRackCard;