import { DataCardList } from "../components/DataCardList/DataCardList.js";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../data/deleteCard.js";

export const DeletePage = ({ cardList, setCardList }) => {
  const navigate = useNavigate();

  const handleDeleteCard = async (cardId) => {
    const id = await deleteCard(cardId);
    if (id) {
      setCardList((prevCardList) =>
        prevCardList.filter((card) => card.id !== cardId)
      );
      navigate("/delete");
    }
  };

  return (
    <main className="home">
      <div>
        <DataCardList
          isDeleting={true}
          cardList={cardList}
          setCardList={setCardList}
          onDeleteCard={handleDeleteCard}
        />
      </div>
    </main>
  );
};
