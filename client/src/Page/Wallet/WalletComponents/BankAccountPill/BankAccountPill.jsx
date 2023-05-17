import styles from './bankAccountPill.module.css'

function BankAccountPill({ name, account, bank, customStyle }) {
  return (
    <div style={customStyle} className={styles['bnk-account-pill']}>
      <h1>{name}</h1>
      <p>{account}</p>
      <p>{bank}</p>
    </div>
  )
}

export default BankAccountPill
