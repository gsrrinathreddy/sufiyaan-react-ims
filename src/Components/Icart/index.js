import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Icart(props) {
  let badgeContent=props.badgeContent;
  let numCakes=useSelector((state)=>state.cake.orderedCakes)
  let numOfIcecreams=useSelector((state)=>state.icecream.orderedIcecreams)
  let numOfFlowers=useSelector((state)=>state.flower. orderedFlowers)
  let s=numCakes+numOfIcecreams+numOfFlowers
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={s} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}