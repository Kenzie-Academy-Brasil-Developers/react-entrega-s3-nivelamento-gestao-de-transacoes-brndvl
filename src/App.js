import "./App.css";
import { useState } from "react";
import { Display } from "./components/Display";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [entryFruits, setEntryFruits] = useState([]);

  const [exitFruits, setExitFruits] = useState([]);

  const [selectSection, setSelectSection] = useState(false)

  const showEntries = () => {
    setSelectSection(true)
  }

  const showExits = () => {
    setSelectSection(false)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Display
          transactions={transactions}
          setTransactions={setTransactions}
          entryFruits={entryFruits}
          setEntryFruits={setEntryFruits}
          exitFruits={exitFruits}
          setExitFruits={setExitFruits}
          selectSection={selectSection}
          setSelectSection={setSelectSection}
          showExits={showExits}
          showEntries={showEntries}
        />
      </div>
    </div>
  );
}

export default App;
