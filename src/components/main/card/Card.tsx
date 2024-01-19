import { cardInfo } from "../../../types";
import styles from "./Card.module.css";

type Props = {
  card: cardInfo;
};

function toFixed(num: number, fixed: number): string {
  const re = new RegExp(`^-?\\d+(?:\\.\\d{0,${fixed || -1}})?`);
  const result = num.toString().match(re);
  return result ? result[0] : "0";
}

function Card({ card }: Props) {
  return (
    <div className={styles[card.cardClass]}>
      <p className={styles.plan}>{card.plan}</p>
      <div className={styles.priceWrapper}>
        <span>$</span>
        <span className={styles.price}>{toFixed(card.price, 2)}</span>
      </div>
      <div className={styles.info}>
        <p>{card.storage}</p>
        <p>{card.users}</p>
        <p>{card.sendUp}</p>
      </div>
      <button>Learn more</button>
    </div>
  );
}

export default Card;
