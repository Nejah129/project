import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/actions/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsDiscription from "../ProductsDiscription";
import { Link } from "react-router-dom";

const ProductsCard = ({ product}) => {
  // const { loading } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // //const getProducts = () => dispatch(getProduct(product.id));
  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

  return (
    <div>
  
        
          <h1>{product.name}</h1>
          <h2>Price{product.price}</h2>
          
            <Link to={`/product/${product._id}`}>see details</Link>
          
        
      
    </div>
  );
};

export default ProductsCard;
