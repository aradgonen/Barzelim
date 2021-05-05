import React from 'react';
import UDetails from './UDetails';
import UConnectionInfo from './UConnectionInfo';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { Fragment } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import FitText from '@kennethormandy/react-fittext'

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
      const HPUCell = withStyles((theme) => ({
        body: { 
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
      }))(TableCell);  
      const useStyles = makeStyles({
        table: {   
        },
        Card:{
          minWidth: '12%',
          maxWidth: '12%',
          minHeight: 350,
          raised: true
        },
        Typography:{
          noWrap: false,
          maxWidth: '12%',
          display: 'inline',
          align: 'center',
          'writing-mode': 'vertical-rl',
          // 'text-orientation': 'upright'
        },
        UCSCard:{
          minWidth: '49%',
          maxWidth: '49%',
          minHeight: 80,
          raised: true
        },
        UCSTypography:{
          noWrap: false,
          maxWidth: '12%',
          display: 'inline',
          align: 'center',
        }
      });


  const classes = useStyles();

  function MultiUDeviceCreation() {
    let rowContent = new Array(numberOfU);
  
    if(u.enclosureType == "HPE Enclosure") {
      rowContent[0] =  
          <TableRow>
              <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
              <TopU rowSpan={numberOfU} align="center" ><Typography onClick={() => handleModal(<UDetails uData={{'enclosureType':u.enclosureType,'osVersion':u.osVersion}} title={"Detailed Info"}/>)}>{u.name}</Typography>
                <Grid container alignItems="center" className={classes.root}>
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[0].name ? u.serverNodes[0].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[1].name ? u.serverNodes[1].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[2].name ? u.serverNodes[2].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[3].name ? u.serverNodes[3].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[4].name ? u.serverNodes[4].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[5].name ? u.serverNodes[5].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[6].name ? u.serverNodes[6].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[7].name ? u.serverNodes[7].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                </Grid>
                <Grid container alignItems="center" className={classes.root}>
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[8].name ? u.serverNodes[8].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[9].name ? u.serverNodes[9].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[10].name ? u.serverNodes[10].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[11].name ? u.serverNodes[11].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[12].name ? u.serverNodes[12].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[13].name ? u.serverNodes[13].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[14].name ? u.serverNodes[14].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[15].name ? u.serverNodes[15].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                </Grid>
              </TopU>
              <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>
          </TableRow>
    }
    else if(u.enclosureType == "IBM Enclosure"){
      rowContent[0] =
      <TableRow>
      <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
      <TopU rowSpan={numberOfU} align="center" ><Typography onClick={() => handleModal(<UDetails uData={{'enclosureType':u.enclosureType,'osVersion':u.osVersion}} title={"Detailed Info"}/>)}>{u.name}</Typography>
        <Grid container alignItems="center" className={classes.root}>
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[0].name ? u.serverNodes[0].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[1].name ? u.serverNodes[1].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[2].name ? u.serverNodes[2].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[3].name ? u.serverNodes[3].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[4].name ? u.serverNodes[4].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[5].name ? u.serverNodes[5].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[6].name ? u.serverNodes[6].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={classes.Card}><CardContent><Typography className={classes.Typography}>{u.serverNodes[7].name ? u.serverNodes[7].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
        </Grid>
      </TopU>
      <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>
  </TableRow>
    }
    else if(u.enclosureType == "Cisco UCS Enclosure"){
      rowContent[0] =  
      <TableRow>
          <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
          <TopU rowSpan={numberOfU} align="center" ><Typography onClick={() => handleModal(<UDetails uData={{'enclosureType':u.enclosureType,'osVersion':u.osVersion}} title={"Detailed Info"}/>)}>{u.name}</Typography>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[0].name ? u.serverNodes[0].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[1].name ? u.serverNodes[1].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[2].name ? u.serverNodes[2].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[3].name ? u.serverNodes[3].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[4].name ? u.serverNodes[4].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[5].name ? u.serverNodes[5].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[6].name ? u.serverNodes[6].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={classes.UCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[7].name ? u.serverNodes[7].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
          </TopU>
          <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>
      </TableRow>
    }
    else{
      rowContent[0] =
          <TableRow>
          <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
          <TopU rowSpan={numberOfU} align="center" onClick={() => handleModal(<UDetails uData={u} title={"Detailed Info"}/>)}>{u.name}</TopU>
          <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>
          </TableRow>

    }
      rowContent[rowContent.length - 1] =  
          <TableRow>
              <SideTableCell align="center" width="3%">{bottomUNumber}</SideTableCell>
              <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{bottomUNumber}</SideTableCell>
          </TableRow>    
      
      // for each U - between the Top and Bottom (not include them) create the rows
      for (let rowIndex = 1; rowIndex < numberOfU -1 ; rowIndex++) {
          rowContent[rowIndex] =  
          <TableRow>
              <SideTableCell align="center" width="3%">{upperUNumber - rowIndex}</SideTableCell>
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