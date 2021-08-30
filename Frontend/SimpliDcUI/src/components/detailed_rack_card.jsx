import React,{} from 'react';
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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import MultiUDevice from './multiUDevice'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function DetailedRackCard() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const dc = useSelector((state) => state.dc);
  let rack = (dc.filter(rack=>rack.rack_id == id))[0];
  rack = fillReservedU(rack);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
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
    if(rack != undefined){
        return(
          <React.Fragment>
            <ModalProvider>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center">
              <Card className={classes.Card} key={rack.rack_id}>
                <CardContent>
                  <Typography variant="body2" component="span">
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
            </React.Fragment>

        )
      }
      else{
        return(<div></div>)

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
      let rackContent = rack.data
      let rackComponents = new Array(0);
      let device;
      
        let u_counter = 1;
      rackContent.forEach((u, index) => {
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
                    key={"multiudevice"+index}/>
        } else {
          device = <TableRow key={index}>
                    <SideTableCell align="center" width="3%">{index+1}</SideTableCell>
                    <StyledTableCell align="center" onClick={() => handleModal(<UDetails rack_id={rack.rack_id} uData={u.data} title={"Detailed Info"}/>)}>{u.data.name}</StyledTableCell>
                    <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo  uData={u.data} title={"Connection Info"}/>)}>{index+1}</SideTableCell>
                    </TableRow>
          u_counter = u_counter + 1
        }
        rackComponents.unshift(device);
      });
  
      return rackComponents;
  
  }
  function fillReservedU(rack){
    if(rack !== undefined)
    rack.data.forEach((u, index) => {
      if(u.data.size > 1){
        for(let i=1;i<u.data.size;i++){
          rack.data[index-i].data.reserved = true
        }
      }
    });
    return rack
  }
  export default DetailedRackCard;