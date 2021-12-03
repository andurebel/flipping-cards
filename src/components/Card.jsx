import "./Card.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front  w-full block border-2 rounded-md border-white"
          src={card.src}
          alt="card front"
        />
        <img
          className="back w-full block border-2 rounded-md border-white"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
