export type cardInfo = {
  plan: string;
  price: number;
  storage: string;
  users: string;
  sendUp: string;
  cardClass: string;
};

export type headerProps = {
  setIsAnual: React.Dispatch<React.SetStateAction<boolean>>
}

export type anualType = {
  isAnual: boolean
}
