import styles from './watchlistPill.module.css'

function WatchListPill({figColor, img, coinABV, transact, value, percentChange }) {
  return (
    <div className={styles.pill}>
      <div className={styles['section-1']}>
        <figure>
          <img src={img} />
        </figure>

        <section className={styles['details-container']}>
          <h1>{coinABV}</h1>
          <p>{transact}</p>
        </section>
      </div>
      
      <section className={styles['section-2']}>
        <p className={styles['value']}>{value}</p>
        <p className={styles['percent']}>{percentChange}</p>
      </section>
      
    </div>
  )
}

export default WatchListPill
