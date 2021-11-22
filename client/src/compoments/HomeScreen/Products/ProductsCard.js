import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product}) => {
 

  return (
    <div>
  
        
          <h1>{product.name}</h1>
          <h2>Price{product.price}</h2>
          
            <Link to={`/product/${product._id}`}>see details</Link>
          
        
      
    </div>
  );
};

export default ProductsCard;
