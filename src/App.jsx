import { useState } from "react";
import "./App.css";
function App() {
  const obj = { name: "Vattra", age: 23, gender: "male" };
  const [currentObj, setCurrentObj] = useState(obj);

  // const newObj = { ...obj, age: 24 };

  return (
    <div>
      <h3>{currentObj.name}</h3>
      <h3>{currentObj.age}</h3>
      <h3>{currentObj.gender}</h3>
      <button onClick={() => setCurrentObj({...currentObj, age: currentObj.age + 1})}>Change</button>
    </div>
  );
}

export default App;
