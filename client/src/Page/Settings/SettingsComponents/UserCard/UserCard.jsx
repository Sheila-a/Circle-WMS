import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './userCard.module.css'
import img from '../../../../assets/Ellipse 7.png'
import camera from '../../../../assets/icon.png'
import Button from '../Button/Button'



function UserCard({name, email}) {
  return (
    <div className={styles['user-card']}>
      <section className={styles['section-1']} >
        <div> 
            <figure>
              <img src={img} alt="" />
            </figure>
            <button type='file' className={styles['icon-container']}> <img src={camera} alt="" /></button>
            
            
        </div>

        <article>
          <p className={styles['name']}>{name}</p>
          <p className={styles['email']}>{email}</p>
        </article>
      </section>

      <p className={styles['demarcation']}></p>

      <section className={styles['section-2']}>
      <Button
              text='Profile'
              customStyle = {{
                'paddingRight': '67%',
                'marginBottom' : '10px'
              }}/>
        
        <Button
            text='Password'
            customStyle = {{
              'paddingRight': '60%',
              'background' : 'white',
              'color': '#667085',
              'border' : '2px solid white'
            }}
            />
      </section>
      
    </div>
  )
}

export default UserCard
