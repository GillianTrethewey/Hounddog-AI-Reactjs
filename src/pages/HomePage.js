import { DataCardList } from "../components/DataCardList/DataCardList.js";

export const HomePage = ({  cardList, onDeleteCard}) => {


  return (
    <main className="home">
      <div>
        <DataCardList
          cardList={cardList}
          onDeleteCard={onDeleteCard}
          isDeleting={false}
        />
      </div>
    </main>
  );
};
