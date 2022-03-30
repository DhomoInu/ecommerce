import styles from "../styles/CategoryItem.module.css";


import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className={styles.container}>
    <img src={item.img} alt="imageForCategory" className={styles.catImg}/>
    <div className={styles.info}>
       
       <h1 className={styles.title}>{item.title}</h1>
       <button div className={styles.btn}>Shop Now</button>

    </div>

    </div>
  )
}

export default CategoryItem   