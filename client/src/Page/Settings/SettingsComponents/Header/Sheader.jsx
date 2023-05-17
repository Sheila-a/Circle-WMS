import { Link } from "react-router-dom";
import Button from '../../../../Components/Button/Button';
import styles from  './sheader.module.css';
import img from '../../../../assets/image 12.png';


import AuthContext from "../../../../context/AuthProvider";
import { useContext } from "react";




function Sheader() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <header className={styles['sheader']}>
        <section>
            <h1>Hello {auth?.user?.fullName}</h1>
            <p>Make Changes that are personalized to you.</p>
            
            <Link to="start-recycling">
              <Button content="Start recycling" style={{backgroundColor:"#8BC34A", border:"none", marginLeft:"0"}}/>
            </Link>
        </section>

        <figure className={styles['header-img-container']}>
          <img src={img} alt="" className={styles['header-img']} />
        </figure>
        
      </header>
      
    </div>
  )
}

export default Sheader
