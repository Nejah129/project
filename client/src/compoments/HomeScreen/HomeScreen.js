import React from "react";
import Products from "./Prudcts";
import "./Home.css";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          {Products.map((products) => {
            return (
              <div>
                <Link to={`product/${products.id}`}>
                  <img src={products.image} className="img-home" />
                  <h1>{products.name}</h1>

                  <h2> Raiting :{products.rating}</h2>
                  <h2>Price{products.price}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
