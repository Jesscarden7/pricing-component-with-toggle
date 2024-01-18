import styles from "./Header.module.css";
import Toggle from "./toggle/Toggle";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Our Pricing</h1>
      <div className={styles.toggleWrapper}>
        <p>Annually</p>
        <Toggle />
        <p>Monthly</p>
      </div>
    </div>
  );
}

export default Header;
