import React from "react";
import Card from "./Card";

function Product() {
  // Array Object
  const shoes = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/12210270/pexels-photo-12210270.jpeg",
      brand: "Adidas",
      description:
        "These shoes are made of high-quality leather and are perfect for a casual look.",
      price: "60$",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/33039735/pexels-photo-33039735.jpeg",
      brand: "Nike",
      description:
        "These shoes are made of high-quality leather and are perfect for a casual look.",
      price: "80$",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/9992898/pexels-photo-9992898.jpeg",
      brand: "Reebok",
      description:
        "Stylish perforated leather shoes displayed elegantly on a rustic wooden stump indoors",
      price: "80$",
    },
  ];
  return (
    <div>
      {shoes.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </div>
  );
}

export default Product;
