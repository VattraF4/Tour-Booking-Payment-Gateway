import React from "react";
import "./Card.css";
function Profile(props) {
  const { name, position, id, getId } = props;

  return (
    <article className="w-\[200px\] overflow-hidden rounded-[20px] bg-[rgb(108,108,150)] p-[10px_10px_20px_10px] m-[5px_0px]">
      <h3>{name}</h3>
      <h3>{position}</h3>
      <button onClick={() => getId(id)}>Click Me</button>
    </article>
  );
}

export default Profile;
