import React from "react";

function Form() {
  const onChangeHndler = (event) => {
    console.log(event.target.value);
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    console.log("Button clicked");
  };
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(event);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          // className="border-amber-200 bg-amber-200 "
          onChange={onChangeHndler}
          type="text"
        />
      </form>
      <button
        onClick={onClickHandler}
        // className="bg-amber-200 hover:bg-amber-300 hover:border-amber-300  border-amber-200 rounded-md p-2 m-2"
      >
        Click Me
      </button>
    </>
  );
}

export default Form;
