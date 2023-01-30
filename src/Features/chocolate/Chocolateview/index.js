import * as React from 'react';
import { useDispatch,useSelector } from "react-redux";
import{ordered,restocked} from '../chocolateSlice';
import { Button, Grid } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import chocolate1 from"../../../Asset/Chocolates/chocolate1.jpg";
import chocolate2 from "../../../Asset/Chocolates/chocolate2.jpg";
import chocolate3 from "../../../Asset/Chocolates/chocolate3.jpg";
import chocolate4 from "../../../Asset/Chocolates/chocolate4.jpg";
import chocolate5 from "../../../Asset/Chocolates/chocolate5.jpg";
import chocolate6 from "../../../Asset/Chocolates/chocolate6.jpg";
import chocolate7 from "../../../Asset/Chocolates/chocolate7.jpg";
import chocolate8 from "../../../Asset/Chocolates/chocolate8.jpg";
import chocolate9 from "../../../Asset/Chocolates/chocolate9.jpg";
import chocolate10 from "../../../Asset/Chocolates/chocolate10.jpg";
import chocolate11 from "../../../Asset/Chocolates/chocolate11.jpg";
import chocolate12 from "../../../Asset/Chocolates/chocolate12.jpg";
import Icart from '../../../Component/Icart';
import Irating from '../../../Component/Irating';
import Icard from '../../../Component/Icard';


 export default function Chocolateview(props){
    let title=props.title
    let photo=props.photo
   const dispatch=useDispatch();
   const num1=useSelector((state)=>state.chocolate.numOfChocolates);
    //console.log('chocolate',numOfChocolates);
    const orderedChocolates=useSelector((state)=>state.chocolate.orderedChocolates)

    const chocolateList=[
      {
        title:'chocolate1',
        photo:chocolate1,
        price:324
      },
      {
        title:"chocolate2",
        photo:chocolate2
      },
      {
        title:"chocolate3",
        photo:chocolate3
      },
      {
        title:"chocolate4",
        photo:chocolate4
      },
      {
        title:"chocolate5",
        photo:chocolate5
      },
      {
        title:"chocolate6",
        photo:chocolate6
      },
      {
        title:"chocolate7",
        photo:chocolate7
      },
      {
        title:"chocolate10",
        photo:chocolate10
      },
      {
        title:"chocolate11",
        photo:chocolate11
      },
      {
        title:"chocolate12",
        photo:chocolate12
      }
      
      
      

]




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      

 const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    dispatch(ordered(5));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return(
        <>
        <br/>

      <Grid container spacing={{xs:2,md:3}} columnSpacing={{xs:4,sm:8,md:12}} sx={{backgroundColor:"black"}}>
        {
          chocolateList.map((item,index)=>{
            return(
              <Grid item xs={2}  sm={6} md={4} key={index}>

              <Icard  title={item.title}
                      photo={item.photo}
                      price={item.price}
              ></Icard>
              </Grid>
            )
          })
        }
      </Grid>





        <h2>numOfChocolates{num1}</h2>
        <Icart badgeContent={orderedChocolates}></Icart>
        <Button variant="outlined" onClick={handleClick }>
        Order Chocolates
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your order is placed!
        </Alert>
      </Snackbar>
        <Button
             onClick={()=>{
                  dispatch(restocked(10))
        }}>
            restock chocolates
        </Button>
        </>
    )
}