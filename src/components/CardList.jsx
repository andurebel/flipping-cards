const CardList = ({ shuffleCards, setCards, card }) => {
  return (
    <div key={card.id}>
      <div className="">
        <img src={card.src} alt="card front" className="front " />
        <img src="/img/cover.png" alt="card back" className="back" />
      </div>
    </div>
  );
};

export default CardList;
