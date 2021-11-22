import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";
import { getProductWithID } from "../../redux/actions/actions";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

  
const ProductsDiscription = ({match }) => {
  const {loading,products}= useSelector(state => state.productReducer);
   
  
  const productId = match.params.id;
  const product = products.find((product) => product._id ===  productId);
// const dispatch = useDispatch()
// useEffect(() => {
//   dispatch(getProductWithID())
// }, [])

  console.log("product",product)
  console.log("productId",productId)
  console.log("match",match)
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
 
  return (
    <div>
      {loading ? (
        <div>
          <h1>loading...</h1>
        </div>
      ) : (
        <div>
         
         <div>
        <h2>product name :{product.name}</h2>
        {/* <img src={producte.image} alt={product.name} /> */}
        <h4>{product.description}</h4>
      </div>
      <div>
        <h2>Price :{product.price}</h2>
        <hr />
        {product.quantity > 0 ? (
        <h5>Currently available ({product.quantity} in stock) </h5>
      ) : (
        <h5>Currently out of stock </h5>
      )}
        <span>Selct Qunatity</span>
        <br />

        <select>
          {[...Array(product.quantity).keys()].map((x, index) => {
            return(<option value={index + 1}>{index + 1}</option>)
            
          })}
        </select>
        <hr />
        <br />
        <button onClick={openModal}>Buy Now </button>
        <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form onSubmit={(e) => {
            e.preventDefault();closeModal()}}>
              <h1>{product.name}</h1>
              <h4>Quantity:{product.price}</h4>
              <h2>Price :{product.price*product.quantity}</h2>
              <button>Add to Busket</button>
              <button onClick={closeModal}>Cancel</button>
            </form>
      </Modal>
      </div>
        </div>
        
      )}
    </div>
  );
};

export default ProductsDiscription;
