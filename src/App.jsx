import { useState } from "react";
import "./App.css";

import Product from "./components/Product";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Form />
      <Users/>
    </div>
  );
}

export default App;
