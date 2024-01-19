import styles from "./Header.module.css";
import Toggle from "./toggle/Toggle";
import { headerProps } from "../../types";

function Header({setIsAnual}: headerProps) {
  return (
    <div className={styles.header}>
      <h1>Our Pricing</h1>
      <div className={styles.toggleWrapper}>
        <p>Annually</p>
        <Toggle setIsAnual = {setIsAnual}/>
        <p>Monthly</p>
      </div>
    </div>
  );
}

export default Header;
