import styles from './buttonPill.module.css'

function ButtonPill({img, action }) {
  return (
    <button className={styles['grey-btn']}>
      <img src={img} alt="" />
      <p>{action}</p>
      <span>&gt;</span>
    </button>
  )
}

export default ButtonPill
