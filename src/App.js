import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard.js";

const cardsArray = [];
cardsArray.push({
  value: 1,
});
for (let i = 0; i < 100; i++) {
  cardsArray.push({
    value: 2,
  });
}
for (let i = 0; i < 9899; i++) {
  cardsArray.push({
    value: 3,
  });
}

function App() {
  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  return (
    <div className="App">
      <h1>Verrassingskalender!</h1>
      <button onClick={shuffleCards}>Nieuw Spel</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
