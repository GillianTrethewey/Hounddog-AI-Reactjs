import { DataCardForm } from "../components/DataCardForm/DataCardForm.js";

export const UploadPage = ({setCardList, onAddCard}) => {
  return (
    <main>        
        <DataCardForm 
        setCardList={setCardList}
        onAddCard={onAddCard}/>
    </main>
  )
}
