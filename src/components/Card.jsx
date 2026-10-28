import React from "react";
import "./Card.css";

function Card(props) {
    const { image, brand, description, price } = props;
  return (
    <article className="w-[200px] overflow-hidden rounded-[20px] bg-[rgb(108,108,150)] p-[10px_10px_20px_10px] m-[5px_0px]">
      <img
        className="w-52 rounded-2xl"
        src={image}
        alt="A beautiful landscape shoes"
      />
      <h3>{brand}</h3>
      <p>{description}</p>
      <span className="text-[16px] font-bold text-white">{price}</span>
    </article>
  );
}

export default Card;
