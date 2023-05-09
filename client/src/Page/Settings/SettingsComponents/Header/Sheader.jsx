import React from 'react'

import Button from '../Button/Button'
import styles from  './sheader.module.css'
import img from '../../../../assets/image 12.png'




function Sheader() {
  return (
    <div>
      <header className={styles['sheader']}>
        <section>
            <h1>Hello Sheila</h1>
            <p>Make Changes that are personalized to you.</p>
            <Button text='Start recycling' />
        </section>

        <figure className={styles['header-img-container']}>
          <img src={img} alt="" className={styles['header-img']} />
        </figure>
        
      </header>
      
    </div>
  )
}

export default Sheader
