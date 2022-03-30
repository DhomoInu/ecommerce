import stylex from "../styles/Product.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import React from 'react'

const Product = ({item}) => {
  return (
    <div className={stylex.container}>
    <div className={stylex.circle}></div>
    <img src={item.img} alt=""  className={stylex.prodImg}/>
    <div className={stylex.info}>
        <div className={stylex.icons}>
        <ShoppingCartOutlinedIcon/>
        </div>
        <div className={stylex.icons}>
        <SearchOutlinedIcon/>
        </div>
        <div className={stylex.icons}>
        <FavoriteBorderOutlinedIcon/>
        </div>
    </div>
    
    </div>
  )
}

export default Product