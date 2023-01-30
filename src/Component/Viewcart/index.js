import { Box } from "@mui/material"
import { useSelector } from "react-redux"
export default function Viewcart(){
     const orderedcakes=useSelector((state)=>state.cake.orderedCakes)
    const orderedchocolates=useSelector((state)=>state.chocolate.orderedChocolates)
    return(
        <>
        <Box sx={{width:'100%',backgroundColor:'peachpuff',textAlign:'left'}}>


        Your Orders:
        <br/>
        no of cakes ordered:{orderedcakes}
        no of Chocolates ordered :{orderedchocolates}
</Box>


        </>
    )
}