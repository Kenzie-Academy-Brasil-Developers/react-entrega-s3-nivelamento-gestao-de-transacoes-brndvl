import "./style.css";

export const Saidas = ({ exitFruits }) => {
  return (
    <div>
      <p>Saída:</p>

      <ul>
        {exitFruits.map((item, index) => (
          <li key={index}>
            Nome: {item.name}, Quantidade: {item.quantity}, Preço: R$
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
