import React from 'react'
import styles from '../styles/Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';






const Navbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.wrapper}>
      <div className={styles.left}>
      <span className={styles.language}>En</span>
      <div className={styles.searchContainer}>
          
          
          
          <input type="text" className={styles.inputStyle}/>
          <SearchIcon className={styles.searchIcon}/>
          
        
      </div>
      </div>

      <div className={styles.center}>
      <h1 className={styles.logo}>MASH.</h1>
      </div>

      <div className={styles.right}>
      <div className={styles.menuItem}>REGISTER</div>
      <div className={styles.menuItem}>SIGN IN</div>
      <div className={styles.menuItem}>
      
       <Badge badgeContent={4} color="secondary">
       <ShoppingCartOutlinedIcon />
      </Badge>
      </div>
      </div>

     </div>
    
    </div>
  )
}

export default Navbar