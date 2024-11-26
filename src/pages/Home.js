import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products] = useState([
    { id: 1, name: "Telefon", price: 300 },
    { id: 2, name: "Noutbuk", price: 900 },
    { id: 3, name: "Quloqchin", price: 50 },
    { id: 4, name: "Quloqchin 23", price: 80 },
  ]);

  return (
    <div>
      <h2>Mahsulotlar</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
