import Button from "../../../Settings/SettingsComponents/Button/Button"
import styles from './balancePill.module.css'
function BalancePill({img, currency, customStyle }) {
  return (
    <div className={styles.pill} style={customStyle}>
      <div className={styles['section-1']}>
        <figure>
          <img src={img} />
        </figure>

        <section className={styles['details-container']}>
          <p className={styles['balance']}>Balance</p>
          <p className={styles['currency']}>{currency}</p>
          <h1>234</h1>
        </section>
      </div>
      
      <section className={styles['section-2']}>
        <Button text='Withdraw'/>
      </section>
    </div>
  )
}

export default BalancePill
