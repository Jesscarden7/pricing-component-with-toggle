import styles from './Toggle.module.css'
import { headerProps } from '../../../types';

function Toggle({setIsAnual}: headerProps) {
  return ( 
    <div className={styles.toggleWrapper}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={() => {
          setIsAnual(preview => {
            return !preview
          })
        }}/>
        <span className={`${styles.slider} ${styles.round}` }></span>
      </label>
    </div>
   );
}

export default Toggle;