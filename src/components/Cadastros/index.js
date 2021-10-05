import { useState } from "react";
import "./style.css"

export const Cadastros = ({
  transactions,
  setTransactions,
  entryFruits,
  setEntryFruits,
  exitFruits,
  setExitFruits
}) => {
  const [inputName, setInputName] = useState("");

  const [inputQuantity, setInputQuantity] = useState(0);

  const [inputPrice, setInputPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const entry = () => {
    const newObj = {
      name: inputName,
      quantity: inputQuantity,
      price: inputPrice,
    };
    setEntryFruits([...entryFruits, newObj]);
    setTransactions([...transactions, newObj]);
  };

  const exit = () => {
    const newObj = {
      name: inputName,
      quantity: inputQuantity,
      price: inputPrice,
    };
    setExitFruits([...exitFruits, newObj]);
    setTransactions([...transactions, newObj]);
  };

  console.log(exitFruits);
  console.log(entryFruits);

  return (

    <>
      <p>Adicionar Nova Fruta</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome da Fruta"
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          placeholder="Quantidade"
          type="number"
          value={inputQuantity}
          onChange={(e) => setInputQuantity(e.target.value)}
        />

        <input
          placeholder="Preço"
          type="number"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <button onClick={entry}>Entrada</button>
        <button onClick={exit}>Saída</button>
      </form>
    </>
  );
};
