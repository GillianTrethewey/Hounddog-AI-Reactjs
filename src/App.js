import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.js";
import { HomePage } from "./pages/HomePage.js";
import { UploadPage } from "./pages/UploadPage.js";
import { DeletePage } from "./pages/DeletePage.js";
import { useState, useEffect } from "react";
import { getCardList } from "./data/getCardList.js";
import { postCard } from "./data/postCard.js";
import { deleteCard } from "./data/deleteCard.js";

function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCardList();
        //setCardList(response.items);
        setCardList(response.cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddCard = async (newCard) => {
    const createdCard = await postCard(newCard);
    setCardList((prevCardList) => [...prevCardList, createdCard]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage cardList={cardList} />} />
          <Route
            path="/upload"
            element={
              <UploadPage setCardList={setCardList} onAddCard={handleAddCard} />
            }
          />
          <Route
            path="/delete"
            element={
              <DeletePage cardList={cardList} setCardList={setCardList} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
