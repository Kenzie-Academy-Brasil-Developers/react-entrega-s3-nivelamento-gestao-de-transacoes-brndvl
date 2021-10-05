import { Cadastros } from "../Cadastros";
import { Entradas } from "../Entradas";
import { Saidas } from "../Saidas";
import "./style.css";

export const Display = ({
  transactions,
  setTransactions,
  entryFruits,
  setEntryFruits,
  exitFruits,
  setExitFruits,
  selectSection,
  setSelectSection,
  showEntries,
  showExits,
}) => {
  return (
    <>
      <Cadastros
        transactions={transactions}
        setTransactions={setTransactions}
        entryFruits={entryFruits}
        setEntryFruits={setEntryFruits}
        exitFruits={exitFruits}
        setExitFruits={setExitFruits}
      />
      {selectSection ? (
        <div>
          <Entradas entryFruits={entryFruits} setEntryFruits={setEntryFruits} />
          <button onClick={showExits}>Mostrar Saída de Frutas</button>
        </div>
      ) : (
        <div>
          <Saidas exitFruits={exitFruits} setExitFruits={setExitFruits} />
          <button onClick={showEntries}>Mostrar Entrada de Frutas</button>
        </div>
      )}

      <p>Total de Movimentações:</p>

      {transactions.map((item, index) => (
        <li key={index}>
          Nome: {item.name}, Quantidade: {item.quantity}, Preço: R${item.price}
        </li>
      ))}
    </>
  );
};
