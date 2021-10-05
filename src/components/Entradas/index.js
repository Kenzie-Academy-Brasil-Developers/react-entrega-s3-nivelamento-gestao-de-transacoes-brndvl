import "./style.css"

export const Entradas = ({ entryFruits }) => {
  return (
    <div> 
        <p>Entradas:</p>
        <ul>

        {entryFruits.map((item, index) =>
        <li key={index}>Nome: {item.name},  Quantidade: {item.quantity}, Preço: R${item.price}</li>
        )}
        </ul>
    </div>
  );
};
