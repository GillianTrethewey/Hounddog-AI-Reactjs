import Button from "../Button/Button.js";
import "./DataCardForm.scss";
import { useState } from "react";
import { postCard } from "../../data/postCard.js";
import { useNavigate } from "react-router-dom";

export const DataCardForm = ({setCardList, onAddCard}) => {

  const navigate = useNavigate();

  const [newCard, setNewCard] = useState({
    name: "",
    description: "",
    includePattern: "",
    excludePattern: "",
    sensitivity: "LOW",
  });

  const handleChange = (event) => {
    setNewCard((prevNewCard) => ({
      ...prevNewCard,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitCard = async (event) => {
    event.preventDefault();
    try {
      const createdCard = await postCard(newCard);
      setCardList((prevCardList) => [createdCard, ...prevCardList]);
      navigate('/');

    setNewCard({
      name: "",
      description: "",
      includePattern: "",
      excludePattern: "",
      sensitivity: "LOW",
      });
    } catch (error) {
      console.error("Error creating card:", error);
      throw error;
    }
  };

  return (
    <section className="newcard">
      <h4 className="newcard__title">INPUT NEW CARD</h4>
      <div className="newcard__container">
        <form
          className="form"
          action=""
          method="post"
          onSubmit={handleSubmitCard}>
          <div className="form__group">
            <div className="form__wrapper">
              <label className="form__label" htmlFor="name">
                NAME
              </label>
              <textarea
                className="form__textarea"
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={newCard.name}
                placeholder="add a name"></textarea>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="description">
                DESCRIPTION
              </label>
              <textarea
                className="form__textarea"
                name="description"
                id="description"
                cols="30"
                rows="5"
                onChange={handleChange}
                value={newCard.description}
                placeholder="add a description"></textarea>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="includePattern">
                INCLUDE PATTERN
              </label>
              <textarea
                className="form__textarea"
                type="text"
                name="includePattern"
                id="includePattern"
                onChange={handleChange}
                value={newCard.includePattern}
                placeholder="add a pattern to include"></textarea>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="excludePattern">
                EXCLUDE PATTERN
              </label>
              <textarea
                className="form__textarea"
                type="text"
                name="excludePattern"
                id="excludePattern"
                onChange={handleChange}
                value={newCard.excludePattern}
                placeholder="add a pattern to exclude"></textarea>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="sensitivity">
                SENSITIVITY
              </label>
              <select
                className="form__textarea"
                type="text"
                name="sensitivity"
                id="sensitivity"
                onChange={handleChange}
                value={newCard.sensitivity}>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="CRITICAL">CRITICAL</option>
              </select>
            </div>

            <div className="newcard___button-container">
              <Button
                btnClassName="button--submit"
                btnType="submit"
                btnLabel="SUBMIT"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
