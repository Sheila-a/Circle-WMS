import { Button } from '@mui/material'
import styles from './goback.module.css'

function Goback() {
  return (
    <button className={styles['go-back']}><span>&#8592;</span> Go back</button>
  )
}

export default Goback
