import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard.js";
import "./App.css";

const axios = require("axios");
var cardsArray = [];

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    kaarten();
  }, []);

  var kaarten = async () => {
    await axios
      .get("https://localhost:44322/api/CardModels/")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        cardsArray = data;
        console.log(cardsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const shuffleCards = () => {
    cardsArray.push(kaarten.data);
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
