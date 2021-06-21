import React from "react";
import Products from "./Prudcts";

const ProductsDiscription = ({ match }) => {
  const productId = match.params.id;
  const product = Products.find((product) => product.id == productId);

  return (
    <div>
      <div>
        <h2>product name :{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <h4>{product.description}</h4>
      </div>
      <div>
        <h2>Price :{product.price}</h2>
        <hr />
        <span>Selct Qunatity</span>
        <br />

        <select>
          {[...Array(product.countInStock).keys()].map((x, index) => {
            return(<option value={index + 1}>{index + 1}</option>)
            
          })}
        </select>
        <hr />
        <br />
        <button>Buy Now </button>
      </div>
    </div>
  );
};

export default ProductsDiscription;
