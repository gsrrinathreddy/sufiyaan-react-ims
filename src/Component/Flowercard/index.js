import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Irating from '../Irating';
import { useState,useEffect } from 'react';
import Itextfield from '../Itextfield';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { ordered as flowerorder } from '../../Features/Flower/FlowerSlice';
import { ordered as iceCreamorder } from '../../Features/icecream/icecreamSlice';
import { ordered as cakeorder } from '../../Features/cake/cakeSlice';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Flowercard(props) {
    let ordername=props.ordername
    let title=props.title;
    let photo=props.photo;
    let price=props.price;
    let orderPlaced=props.order
    const dispatch=useDispatch()
    const [count, setCount] = useState(0);
    const [expanded, setExpanded] = React.useState(false);
    const [qty,setQty]=useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  let params={
    title:title,
    price:price,

    qty:parseInt(qty)
  }

  return (
    <Card sx={{ maxWidth: 400 ,marginLeft:"1px"}} style={{backgroundColor:"silver"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[300] }} aria-label="recipe"> 
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={photo}
        alt="Paella dish"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
         <Irating/>
        </Typography>
        <Typography>
            <TextField sx={{width:'70px'}} size="small" id="outlined-basic"  variant="outlined" defaultValue={0} onChange={(e)=>setQty(e.currentTarget.value)}/> 
        <Box><Button aria-label="cart " sx={{color:'black'}} 
        onClick={()=>{
                dispatch(orderPlaced(params))
        
        }}>add</Button> 
    </Box>
        </Typography>
       price:  {price}
      </CardContent>

      <CardActions disableSpacing>
        
                <p>Likes{count}</p>
                <IconButton aria-label="add to favorites" onClick={() => setCount(count + 1)}>
                <FavoriteIcon />
        </IconButton>
        
        <IconButton aria-label="share">
          <ShareIcon />
          
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography>
            {price}
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}