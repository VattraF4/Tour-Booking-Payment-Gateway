import { useState } from "react";
import "./App.css";
function App() {
  const [currentText, setCurrentText] = useState("Hello");

  return (
    <div>
      <h3>{currentText}</h3>
      <input
        onChange={(e) => setCurrentText(e.target.value)}
        value={currentText}
        type="text"
        placeholder="typing"
      />
      <button onClick={() => setCurrentText("")}>Clear</button>
    </div>
  );
}

export default App;
