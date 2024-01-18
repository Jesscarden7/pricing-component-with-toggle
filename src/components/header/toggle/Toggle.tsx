import styles from './Toggle.module.css'

function Toggle() {
  return ( 
    <div className={styles.toggleWrapper}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}` }></span>
      </label>
    </div>
   );
}

export default Toggle;