import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import styles from './login.module.css';
import recycleHand from '../../assets/LoginImg.png';
import google from '../../assets/Social icon.png';
import linekdln from '../../assets/Vector.png';

import AuthContext from '../../context/AuthProvider'; 
import axios from 'axios';
const LOGIN_URL = 'https://circle-wms.onrender.com/api/v1/users/login';

function Login({Clickhandler}) {
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const auth = useContext(AuthContext)
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMSg] = useState('')

  useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            const apiResponse = JSON.stringify(response?.data);
            console.log(apiResponse);
            const user = apiResponse.user.fullname;
            const userId = apiResponse.user._id;
            const message = apiResponse.message;
            console.log({ user, userId, message})
            
            setAuth({ user, userId});
            console.log('auth:', auth)


            
            setEmail('');
            setPassword('');
            setSuccess(true);
            setSuccessMSg(message)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


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

        <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen} aria-live="assertive">{errMsg}</p>
        <p className={styles.successMsg}>{successMsg}</p>
        

        <section className={styles['content']}>
          <form onSubmit={handleSubmit}>

          <label className={styles['input-label']} htmlFor="email">Email&#42;</label>
          <input className={styles['input-elem']} 
            type="email"
            id='email'
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder='Enter your Email here' />

          
          <div className={styles['password-describ']}>
            <label className={styles['input-label']} htmlFor="password">Password&#42;</label>
            <p className={styles['forgot-password']}>Forgot password?</p>
          </div>
          <input className={styles['input-elem']} 
            type="password"
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder='Create a password' />
          <p className={styles['caption']}>Must be at least 8 characters long</p>


          <Button
          handleclick={Clickhandler}
          style={{background: '#7F56D9', width: "99%"}}
          text='Login'/>

        </form>

        
      
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
