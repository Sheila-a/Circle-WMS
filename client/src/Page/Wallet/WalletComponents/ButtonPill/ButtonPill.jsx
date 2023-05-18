import styles from './buttonPill.module.css'

function ButtonPill({img, action, handleClick }) {
  return (
    <button className={styles['grey-btn']}onClick={ handleClick } >
      <img src={img} alt="" />
      <p>{action}</p>
      <span>&gt;</span>
    </button>
  )
}

export default ButtonPill
