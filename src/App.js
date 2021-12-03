import { cardImages } from "./cardImages.js";
import { useState } from "react";

export const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="mx-auto flex flex-col h-screen w-full bg-blue-300 items-center justify-center max-w-lg">
      <h1 className="text-3xl font-bold mb-8">Magic Match</h1>
      <button
        onClick={shuffleCards}
        className="border-2 border-white px-4 py-2 text-white font-bold cursor-pointer rounded hover:bg-red-400 hover:text-white"
      >
        New Game
      </button>
    </div>
  );
};

export default App;
