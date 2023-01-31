import { useDispatch,useSelector } from "react-redux";
import{ordered,restocked} from '../FlowerSlice';
import { Button } from "@mui/material";
import Icart from "../../../Components/Icart";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from "react";
import Flowercard from "../../../Component/Flowercard";
import Grid from "@mui/material/Grid";
import flower1 from '../../../Asset/Flowers/flower1.jpg';
import flower2 from '../../../Asset/Flowers/flower2.jpg';
import flower3 from '../../../Asset/Flowers/flower3.jpg';
import flower4 from '../../../Asset/Flowers/flower4.jpg';
import flower5 from '../../../Asset/Flowers/flower5.jpg';
import flower6 from '../../../Asset/Flowers/flower6.jpg';
import flower7 from '../../../Asset/Flowers/flower7.jpg';
import flower8 from '../../../Asset/Flowers/flower8.jpg';
import flower9 from '../../../Asset/Flowers/flower9.jpg';
import flower10 from '../../../Asset/Flowers/flower10.jpg';
import flower11 from '../../../Asset/Flowers/flower11.jpg';
export default function FlowerView(){

  const dispatch=useDispatch();
  const numOfFlowers=useSelector((state)=>state.flower.numOfFlowers);
  console.log('flowers',numOfFlowers);
  const orderedFlowers=useSelector((state)=>state.flower.orderedFlowers)
 let ordername="flower"
  const flowerList=[
    {
      title:"flower1",
      photo:flower1
    },
    {
      title:"flower2",
      photo:flower2
    },
    {
      title:"flower3",
      photo:flower3
    },
    {
      title:"flower4",
      photo:flower4
    },
    {
      title:"flower5",
      photo:flower5
    },
    {
      title:"flower6",
      photo:flower6
    },
    {
      title:"flower7",
      photo:flower7
    },
    {
      title:"flower8",
      photo:flower8
    },
    {
      title:"flower9",
      photo:flower9
    },
    {title:"flower10",
    photo:flower10
    },
    {
      title:"flower11",
      photo:flower11
    }

  ]
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      
        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
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
    flowerList.map((item,index)=>{
      return(
        <Grid item xs={2}  sm={6} md={4} key={index}>

        <Flowercard title={item.title}
                photo={item.photo}
                order={ordered}
                
        ></Flowercard>
        </Grid>
      )
    })
  }
</Grid>
        <h2>numOfFlowers{numOfFlowers}</h2>
        <Icart badgeContent={orderedFlowers}></Icart>
        <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
        <Button
             onClick={()=>{
                  dispatch(restocked(10))
        }}>
            restock flowers
        </Button>
        </>
    )
}