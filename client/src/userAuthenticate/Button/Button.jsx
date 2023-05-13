import React from 'react';
import styles from './button.module.css';

function Button({ text, style, img, handleclick}) {
  return (
    <button
      onClick={handleclick}
      className={styles['g-button-style']} 
      style={style}>
  
        <img src={img} alt="" />
        {text}
    </button>
  )
}

export default Button
