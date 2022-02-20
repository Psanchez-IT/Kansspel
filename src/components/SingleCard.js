import "./SingleCard.css";
import { useState } from "react";

export default function SingleCard({ card }) {
  const [cardStyle, setCardStyle] = useState({});

  let message = "";
  if (card.value === 3) {
    message = "Helaas, u heeft geen prijs =(";
  } else if (card.value === 2) {
    message = "Gefeliciteerd, uw troostprijs is €100,-!!";
  } else message = "Gefeliciteerd, u hoofdprijs is €25.000!!!";

  const handleClick = () => {
    alert(message);
    setCardStyle({ background: "black" });
  };
  return (
    <div className="card" style={cardStyle} onClick={handleClick}>
      {/*card.value*/}
    </div>
  );
}
