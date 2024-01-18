import { cardInfo } from "../../../types";
import styles from "./Card.module.css";

type Props = {
  card: cardInfo;
};

function Card({ card }: Props) {
  const bgColor = { background: `linear-gradient(${card.bgColor})` };
  const borderTop = { borderTop: `1px solid ${card.color3}` };
  const borderBottom = { borderBottom: `1px solid ${card.color3}` };
  const color1 = { color: card.color1 };
  const color2 = { color: card.color2 };
  const color3 = { color: card.color4 };
  const bgButton = { background: `linear-gradient(${card.buttonColor})` };

  return (
    <div style={bgColor} className={styles.card}>
      <p style={color1} className={styles.plan}>
        {card.plan}
      </p>
      <div style={color2} className={styles.priceWrapper}>
        <span>$</span>
        <span className={styles.price}>{card.price}</span>
      </div>
      <div style={color1} className={styles.info}>
        <p style={{ ...borderTop, ...borderBottom }}>{card.storage}</p>
        <p style={borderBottom}>{card.users}</p>
        <p style={borderBottom}>{card.sendUp}</p>
      </div>
      <button style={{ ...bgButton, ...color3 }}>Learn more</button>
    </div>
  );
}

export default Card;
