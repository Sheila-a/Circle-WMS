import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './userCard.module.css'
import img from '../../../../assets/Ellipse 7.png'
import Button from '../Button/Button'



function UserCard({name, email}) {
  return (
    <div className={styles['user-card']}>
      <section className={styles['section-1']} >
        <figure>
          <img src={img} alt="" />
        </figure>

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
              'paddingRight': '64%',
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
