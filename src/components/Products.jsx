import styles from "../styles/Products.module.css";
import { popularProducts } from "../data";

import React from 'react'
import Product from "./Product";

const Products = () => {
  return (
    <div className={styles.container}>
    {popularProducts.map(item=>(
        <Product item={item} key={item.id}/>
    ))}

    </div>
  )
}

export default Products