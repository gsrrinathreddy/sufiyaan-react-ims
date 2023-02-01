import { useDispatch,useSelector } from "react-redux";
import{ordered,restocked} from '../icecreamSlice';
import { Button } from "@mui/material";
import Icart from "../../../Component/Icart";
import Grid from "@mui/material/Grid";
import icecream1 from "../../../Asset/icecream/icecream1.jpg";
import icecream2 from "../../../Asset/icecream/icecream2.jpg";
import icecream3 from "../../../Asset/icecream/icecream3.jpg";
import icecream4 from "../../../Asset/icecream/icecream4.jpg";
import icecream5 from "../../../Asset/icecream/icecream5.jpg";
import icecream6 from "../../../Asset/icecream/icecream6.jpg";
import icecream7 from "../../../Asset/icecream/icecream7.jpg";
import icecream8 from "../../../Asset/icecream/icecream8.jpg";
import icecream9 from "../../../Asset/icecream/icecream9.jpg";
import icecream10 from "../../../Asset/icecream/icecream10.jpg";
import icecream11 from "../../../Asset/icecream/icecream11.jpg";
import icecream12 from "../../../Asset/icecream/icecream12.jpg";
import Flowercard from "../../../Component/Flowercard";
export default function IcecreamView(){
    const dispatch=useDispatch();
    let icecreams  = useSelector((state)=>state.icecream.numOficecreams);
    console.log('icecreams',icecreams);
   const orderedIcecreams=useSelector((state)=>state.icecream.orderedIcecreams)


   const IcecreamList=[
    {
      title:"icecream1",
      photo:icecream1,
      price:345
    },
    {
        title:"icecream2",
        photo:icecream2,
        price:213
    },
{
    title:"icecream3",
    photo:icecream3,
    price:456
},
{
    title:"icecream4",
    photo:icecream4,
    price:112
},
{
    title:"icecream5",
    photo:icecream5,
    price:786
},
{
    title:"icecream6",
    photo:icecream6,
    price:321
},
{
    title:"icecream7",
    photo:icecream7,
    price:578
},
{
    title:"icecream8",
    photo:icecream9,
    price:341
},{
    title:"icecream9",
    photo:icecream9,
    price:876
},
{
    title:"icecream10",
    photo:icecream10,
    price:234
},
{
    title:"icecream11",
    photo:icecream11,
    price:110
},{
    title:"icecream12",
    photo:icecream12,
    price:75
}

]


    return(
        <>
        
<Grid container spacing={{xs:2,md:3}} columnSpacing={{xs:4,sm:8,md:12}} sx={{backgroundColor:"black"}}>
  {
    IcecreamList.map((item,index)=>{
      return(
        <Grid item xs={2}  sm={6} md={4} key={index} sx={{backgroundColor:"#3CB371"}}>

        <Flowercard title={item.title}
                photo={item.photo}
                price={item.price}
                order={ordered}
                
        ></Flowercard>
        </Grid>
      )
    })
  }
</Grid>
         <h2>numOfIcecreams{icecreams}</h2>
        <Icart badgeContent={orderedIcecreams}></Icart>
        <Button
            onClick={()=>{
                   dispatch(ordered(5))
            }}>
            order icecreams
        </Button>
        <Button
             onClick={()=>{
                  dispatch(restocked(10))
        }}>
            restock icecreams
        </Button>
        </>
    )
}