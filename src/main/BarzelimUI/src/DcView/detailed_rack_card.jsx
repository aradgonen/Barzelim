import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import rack_icon from './rack.svg'
import { ModalProvider } from './modalContext'
import { ModalContext } from './modalContext'
import {ResponsiveNeoGraph} from "../UI/Components/NeoGraph/NeoGraph.js"
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
import Multi_U_Component from './multiple_u_component';
function DetailedRackCard(rack){
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
  function renderU(rack,handleModal){
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

      let rackContent = rack.data.reverse()
      return rackContent.map((u,index) => {
        if(u.formFactor == "Blade" || u.size > 1){
          return(
            <Multi_U_Component size={u.size}>
            </Multi_U_Component>
          )
        }
        return(
          <TableRow>
          <SideTableCell align="center" width="3%">{rack.data.length - index}</SideTableCell>
          <StyledTableCell align="center"onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}>{u.name}</StyledTableCell>
          <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{rack.data.length - index}</SideTableCell>
        </TableRow>
        )
      })
  
  }
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
  function UConnectionInfo(props) {
    return (
      <>
        <ResponsiveNeoGraph id="neo4j"
          containerId={"neo4j"}
          neo4jUri={"bolt://"+process.env.REACT_APP_SIMPLIDC_NEO4J_DB+":7687"}
          neo4jUser={process.env.REACT_APP_SIMPLIDC_NEO4J_USER}
          neo4jPassword={process.env.REACT_APP_SIMPLIDC_NEO4J_PASSWORD}
          neo4jcommand={`MATCH (a {serialNumber: "${props.uData.serialNumber}"})-[r]-(b) RETURN r, b,a`}
        />
      </>
    );
  }
  export default DetailedRackCard;