import { useState } from "react";
import "./App.css";
import useToggle from "./useToggle";

function App() {

  const [show, toggle] = useToggle(true);


  return (
    <div className="text-center">
      {show && <LoadingMessage />}
      <button
        className="m-2 hover:bg-gray-700 p-2.5 justify-center align-middle bg-black text-white py-2 px-4 rounded-md"
        onClick={toggle}
      >
        Toggle
      </button>
    </div>
  );
}
function LoadingMessage() {
  return <h2 className="text-black text-center">Message is Loading...</h2>;
}

export default App;
