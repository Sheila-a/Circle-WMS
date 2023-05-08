import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import styles from './login.module.css';

import recycleHand from '../../assets/LoginImg.png';
import google from '../../assets/Social icon.png';
import linekdln from '../../assets/Vector.png';

function Login({Clickhandler}) {
  return (
    <div className={styles['page-like']}>

      <aside className={styles['img-container']}>
          <img src={recycleHand} alt="" />
      </aside>

      <main className={styles['main']}>
        <header>
          <h1 className={styles['title']}>Login</h1>
          <p className={styles['subtitle']}>Welcome back</p>
        </header>

        <section className={styles['content']}>
          <form action="">

          <label className={styles['input-label']} htmlFor="email">Email&#42;</label>
          <input className={styles['input-elem']} type="email" placeholder='Enter your Email here' id='email'/>

          
          <div className={styles['password-describ']}>
            <label className={styles['input-label']} htmlFor="password">Password&#42;</label>
            <p className={styles['forgot-password']}>Forgot password?</p>
          </div>
          <input className={styles['input-elem']} type="password" placeholder='Create a password' id='password'/>
          <p className={styles['caption']}>Must be at least 8 characters long</p>
        </form>

        <Button
          handleclick={Clickhandler}
          style={{background: '#7F56D9', width: "99%"}}
          text='Login'/>
      
        <p className={styles['texty']}>Dont have an account? <Link to='/signup'><span>Sign up</span></Link></p>
        <div className={styles['liney-texty']}>
          <p className={styles['liney']}></p>
          <p className={styles['demac']}>OR</p>
          <p className={styles['liney']}></p>
        </div>
        

        <Button
          style={{background: '#344054'}} 
          text='Sign in with metamask'/>
        <Button
          img={google}
          style={{color: '#344054'}}
          text='Sign in with Google'/>
        <Button
          img={linekdln}  
          style={{ background: "#1877F2"}} 
          text='Sign in with Linkedin'/>
        </section>
      </main>
      
      
    </div>
  )
}

export default Login
