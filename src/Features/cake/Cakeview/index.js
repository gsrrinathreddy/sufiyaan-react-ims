import * as React from 'react';
import { useDispatch,useSelector } from "react-redux";
import{ordered,restocked} from '../cakeSlice';
import { Button, Grid } from "@mui/material";
import Icart from "../../../Components/Icart";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import cake1 from '../../../Asset/cakes/cake1.jpg';
import cake from "../../../Asset/cakes/cake2.jpg";
import cake3 from "../../../Asset/cakes/cake3.jpg";
import cake4 from "../../../Asset/cakes/cake4.jpg";
import Icard from '../../../Components/Icard';
import cake5 from "../../../Asset/cakes/cake5.jpg";
import cake6 from "../../../Asset/cakes/cake6.jpg";
import cake7 from "../../../Asset/cakes/cake7.jpg";
import cake9 from"../../../Asset/cakes/cake9.jpg";
import cake10 from"../../../Asset/cakes/cake10.jpg";
import cake11 from "../../../Asset/cakes/cake11.jpg";
import cake12 from "../../../Asset/cakes/cake12.jpg";
import cake13 from "../../../Asset/cakes/cake13.jpg";
import cake14 from "../../../Asset/cakes/cake14.jpg";
import cake15 from "../../../Asset/cakes/cake15.jpg";
import cake16 from "../../../Asset/cakes/cake16.jpg";
import cake17 from "../../../Asset/cakes/cake17.jpg";
import cake18 from "../../../Asset/cakes/cake18.jpg";
import cake19 from "../../../Asset/cakes/cake19.jpg";
import cake20 from "../../../Asset/cakes/cake20.jpg";
import Irating from '../../../Components/Irating';
import Flowercard from '../../../Component/Flowercard';


export default function Cakeview(props){
  let price=props.price
    const dispatch=useDispatch();
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes);
    console.log('cakes',numOfCakes);
    const orderedCakes=useSelector((state)=>state.cake.orderedCakes)

    const cakeList=[
      {
        title:'cake 1',
        photo:cake1,
        price:324
      },
      {
        title:"cake2",
        photo:cake,
        price:420
        
      },
      {
        title:"cake3",
        photo:cake3,
        price:123
      },
      {
        title:"cake4",
        photo:cake4,
        price:890
      },
      {
        title:"cake5",
        photo:cake5,
        price:341
      },
      {
        title:"cake6",
        photo:cake6,
        price:432
      },
      {
        title:"cake7",
        photo:cake7,
        price:675
      },
      {
        title:"cake9",
        photo:cake9,
        price:231
      },
      {
        title:"cake10",
        photo:cake10,
        price:654
      },
      {
        title:"cake11",
        photo:cake11,
        price:932
      },
{
  title:"cake12",
  photo:cake12,
  price:345
},
{
  title:"cake13",
  photo:cake13,
  price:124

},
{
  title:"cake14",
  photo:cake14,
  price:367
},{
  title:"cake15",
  photo:cake15,
  price:198
},
{
  title:"cake16",
  photo:cake16,
  price:324

},
{
  title:"cake17",
  photo:cake17,
  price:43
},
{
  title:"cake18",
  photo:cake18,
  price:320
  
},
{
  title:"cake19",
photo:cake19
},{
  title:"cake20",
  photo:cake20,
  price:400
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
        

      <Grid container spacing={{xs:2,md:3}} columnSpacing={{xs:4,sm:8,md:12}} sx={{backgroundColor:"black"}}>
        {
          cakeList.map((item,index)=>{
            return(
              <Grid item xs={6}  sm={6} md={4} key={index}>

                <Flowercard  title={item.title}
                      photo={item.photo}
                      price={item.price}
                      order={ordered}
               >

              </Flowercard>
              </Grid>
            )
          })
        }
      </Grid>





        <h2>numOfCakes{numOfCakes}</h2>
        <Icart badgeContent={orderedCakes}></Icart>
        <Button variant="outlined" onClick={handleClick }>
        Order Cakes
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
            restock cakes
        </Button>
        </>
    )
}