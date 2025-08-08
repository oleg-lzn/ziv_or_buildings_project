import CardComponent from "../Card/Card";
import "./CardsList.css";

const CardsList = ({ cards }) => {
  return (
    <ul className="cards-list">
        {cards.map((card) => (
            <CardComponent key={card.id} image= {card.image} title={card.title} description={card.description} />
        ))}
    </ul>
 )
};

export default CardsList;