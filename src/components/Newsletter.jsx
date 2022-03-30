import styler from "../styles/Newsletter.module.css";
import SendIcon from '@mui/icons-material/Send';

import React from 'react'

const Newsletter = () => {
  return (
    <div className={styler.container}>
      <h1 className={styler.title}>NewsLetter</h1>
      <div className={styler.desc}>GET NEWS STRAIGHT FROM...........</div>

      <div className={styler.inputContainer}>
      <input type="text" className={styler.input} placeholder="Your email"/>
      <button className={styler.btn}>
          <SendIcon/>
      </button>

      </div>

    </div>
  )
}

export default Newsletter