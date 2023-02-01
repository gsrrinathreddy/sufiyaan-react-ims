import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import { ordered as icecreamorder } from "../../Features/icecream/icecreamSlice";

import { useState, useEffect } from "react";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function IcecreamCard(props) {
  let title = props.title;
  let photo = props.photo;
  let ordername = props.ordername;
  const dispatch = useDispatch();

  let price = props.price;
  const [qty, setQty] = useState(0);

  const [expanded, setExpanded] = React.useState(false);
  const [count, setCount] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#3CB371" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={photo} alt="Paella dish" />
      <CardContent>
        <Typography>{price}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <p>Likes{count}</p>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setCount(count + 1)}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography>
          <TextField
            sx={{ width: "70px" }}
            size="small"
            id="outlined-basic"
            variant="outlined"
            defaultValue={0}
            onChange={(e) => setQty(e.currentTarget.value)}
          />
          <Box>
            <IconButton
              aria-label="cart "
              sx={{ color: "black" }}
              onClick={() => {
                if (ordername == "icecream") {
                  dispatch(icecreamorder(qty));
                }
              }}
            >
              add
            </IconButton>
          </Box>
        </Typography>
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

        </CardContent>
      </Collapse>
    </Card>
  );
}
