import { useState } from "react";
import "./App.css";
function App() {
  const [countState, setCountState] = useState(0);

  return (
    <div>
      <h3 className="text-center text-[30px] font-bold">{countState}</h3>
      <button
        onClick={() => {
          setCountState((countState) => countState + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
