import React from "react";

function Form() {

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" />
      </form>
      <button onClick={(e) => console.log("Button clicked")}>Click Me</button>
    </>
  );
}

export default Form;
