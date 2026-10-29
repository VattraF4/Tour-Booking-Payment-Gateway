import { useState } from "react";
import "./App.css";
function App() {
  const [number, setNumber] = useState(0);
  function handleIncrement() {
    setTimeout(() => {
      setNumber((number) => number + 1);
    }, 900 );
    console.log(setNumber);
  }
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
