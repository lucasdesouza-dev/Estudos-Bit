import { useState } from "react";

import "./App.css";

function App() {
  const [array1, setArray1] = useState([0, 1, 2, 3, 4]);
  const [array2, setArray2] = useState([]);

  function adicionar() {
    const novoArray = [];
    novoArray.push(...array1);
    setArray1(novoArray);
  }
  return (
    <div className="App">
      <ul>
        {array1.map((x) => (
          <p>{x}</p>
        ))}
      </ul>
      <button onClick={adicionar}>adicionar</button>
    </div>
  );
}

export default App;
