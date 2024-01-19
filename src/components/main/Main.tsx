import Card from "./card/Card";
import styles from "./Main.module.css";
import { anualType } from "../../types";

function Main({isAnual}: anualType) {
  console.log(isAnual);
  
  const cardsInfo = [
    {
      plan: "Basic",
      price: !isAnual ? (199.99/10) : 199.99,
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      sendUp: "Send up to 3 GB",
      cardClass: "card",
    },
    {
      plan: "Professional",
      price: !isAnual ? (249.99/10) : 249.99,
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendUp: "Send up to 10 GB",
      cardClass: "middleCard",
    },
    {
      plan: "Master",
      price: !isAnual ? (399.99/10) : 399.99,
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      sendUp: "Send up to 20 GB",
      cardClass: "card",
    },
  ];

  return (
    <div className={styles.cardWrapper}>
      {cardsInfo.map((cardInfo) => (
        <Card card={cardInfo} />
      ))}
    </div>
  );
}

export default Main;
