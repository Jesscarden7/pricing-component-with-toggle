import Card from './card/Card';
import styles from './Main.module.css'

function Main() {

  const cardsInfo =  [
    {
      plan: "Basic",
      price:  199.99,
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      sendUp: "Send up to 3 GB",
      bgColor: "hsl(0, 0%, 100%), hsl(0, 0%, 100%)",
      buttonColor: "hsl(236, 72%, 79%), hsl(237, 63%, 64%)",
      color1: "hsl(233, 13%, 49%)",
      color2: "hsl(232, 13%, 33%)",
      color3: "hsl(233, 13%, 49%, 0.5)",
      color4: "hsl(0, 0%, 100%)"
    },
    {
      plan: "Professional",
      price:  249.99,
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendUp: "Send up to 10 GB",
      bgColor: "hsl(236, 72%, 79%), hsl(237, 63%, 64%)",
      buttonColor: "hsl(0, 0%, 100%), hsl(0, 0%, 100%)",
      color1: "hsl(240, 78%, 98%)",
      color2: "hsl(0, 0%, 100%)",
      color3: "hsl(240, 78%, 98%, 0.5)",
      color4: "hsl(237, 63%, 64%)"

    },
    {
      plan: "Master",
      price:  399.99,
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      sendUp: "Send up to 20 GB",
      bgColor: "hsl(0, 0%, 100%),hsl(0, 0%, 100%)",
      buttonColor: "hsl(236, 72%, 79%), hsl(237, 63%, 64%)",
      color1: "hsl(233, 13%, 49%)",
      color2: "hsl(232, 13%, 33%)",
      color3: "hsl(233, 13%, 49%, 0.5)",
      color4: "hsl(0, 0%, 100%)"
    }
  ]

  return ( 
    <div className={styles.cardWrapper}>
      {cardsInfo.map(cardInfo => <Card card = {cardInfo}/>)}
    </div>
   );
}

export default Main;