import "./Home.css";
//import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/actions";
import ProductsCard from "./Products/ProductsCard";

const ProductList = () => {
  const { loading, products} = useSelector((state) => state.productReducer);
  console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  },[dispatch]);
  return (
    <div>
      {loading ? (
        <div>
          <h1>loading...</h1>
        </div>
      ) : (
        <div>
          {products.map((product, i) => (
            
            <ProductsCard product={product} key={i} />
            
          )
          
          )}
          
        </div>
        
      )}
      
    </div>
    
  );
  
};

export default ProductList;
