import { cardImages } from "./cardImages.js";
import { useState, useEffect } from "react";
import Card from "./components/Card.jsx";

export const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //make a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare the choices

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(cards);

  //reset choices and next turns

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <div className="w-screen h-screen mx-auto flex flex-col bg-purple-700 items-center justify-center   ">
      <h1 className="text-3xl font-bold mb-8">Let's flip some Minions</h1>
      <button
        onClick={shuffleCards}
        className="border-2 border-white px-4 py-2 text-white font-bold cursor-pointer rounded hover:bg-red-400 hover:text-white"
      >
        New Game
      </button>
      <div className="grid grid-cols-4 gap-4 mt-10 ">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          );
        })}
      </div>
      <p className="text-2xl font-bold mt-10 border-2 p-4 rounded-xl border-red-300">
        Turns: <span className="text-red-400">{turns}</span>
      </p>
    </div>
  );
};

export default App;
