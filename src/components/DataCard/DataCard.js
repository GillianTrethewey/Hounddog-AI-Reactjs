import "./DataCard.scss";
import { Link } from "react-router-dom";

export const DataCard = ({ id, card, onDeleteCard, isDeleting}) => {
  const displayWithQuotes = (value) => {
    return value === "" ? `"${value}"` : value;
  };

  return (
    <Link to={`/cards/${card.id}`} className="card__router-link">
      <li key={card.id} className="datacard-list__li">
        <div className="card__container">
          <div className="card__text">
            <p className="card__text">{id}</p>
            <p className="card__text">{card.name}</p>
            <p className="card__text">{card.description}</p>
            <p className="card__text">
              Exclude Pattern: {displayWithQuotes(card.excludePattern)}
            </p>
            <p className="card__text">Include Pattern: {card.includePattern}</p>
            <p className="card__text">Sensitivity: {card.sensitivity}</p>
            
          </div> 
          { isDeleting ?
            <button className="button--delete" onClick={() => onDeleteCard(card.id)}>DELETE</button>
       : null }
       
            </div>
      </li>
    </Link>
  );
};

export default DataCard;
