import "./SingleCard.css";
import { useState } from "react";

export default function SingleCard({ card }) {
  const [cardStyle, setCardStyle] = useState({});

  let message = "";
  if (card.cardValue === 3) {
    message = "Helaas, u heeft niets gewonnen :(";
  } else if (card.cardValue === 2) {
    message = "Gefeliciteerd, uw troostprijs is €100,-!!";
  } else message = "Gefeliciteerd, u heeft 25.000 gewonnen!!!";

  const handleClick = () => {
    alert(message);
    setCardStyle({ background: "black" });
  };
  return (
    <div className="card" style={cardStyle} onClick={handleClick}>
      {/* {card.cardValue} */}
    </div>
  );
}
