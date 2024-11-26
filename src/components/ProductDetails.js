import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Mahsulot haqida ma'lumot</h2>
      <p>Mahsulot ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
