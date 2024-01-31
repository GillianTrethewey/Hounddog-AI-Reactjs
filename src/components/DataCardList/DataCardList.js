import "./DataCardList.scss";
import { DataCard } from "../DataCard/DataCard.js";

export const DataCardList = ({ cardList, onDeleteCard, isDeleting }) => {
  return (
    <section className="datacard-list__container">
      <ul className="datacard-list__ul">
        {cardList.map((card) => (
          <DataCard
            key={card.id}
            card={card}
            isDeleting={isDeleting}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </ul>
    </section>
  );
};
