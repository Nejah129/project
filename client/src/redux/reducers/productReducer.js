import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELET_PRODUCT,
  DELET_PRODUCT_FAIL,
  DELET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_WITH_ID,
  GET_PRODUCT_WITH_ID_FAIL,
  GET_PRODUCT_WITH_ID_SUCCESS,
  PRODUCT,
} from "../actionsType/actionsType";

const init = {
  loading: false,
  products: [],
  errors: null,
};
const productReducer = (state = init, { type, payload }) => {

    switch (type) {
        case ADD_PRODUCT:
          return {
            ...state,
            loading: true,
          };
        case ADD_PRODUCT_FAIL:
          return {
            ...state,
            loading: false,
            errors: payload,
          };
        case ADD_PRODUCT_SUCCESS:
          return {
            ...state,
            loading: false,
            products: [...state.products, payload],
          };
        case PRODUCT:
          return {
            ...state,
            loading: true,
          };
        case GET_PRODUCT_FAIL:
          return {
            ...state,
            loading: false,
            errors:[...state.errors,payload] 
          };
        case GET_PRODUCT_SUCCESS:
          return {
            ...state,
            loading: false,
            products: payload,
          };



          case GET_PRODUCT_WITH_ID:
          return {
            ...state,
            loading: true,
          };
        case GET_PRODUCT_WITH_ID_FAIL:
          return {
            ...state,
            loading: false,
            errors:payload
            
          };
        case GET_PRODUCT_WITH_ID_SUCCESS:
          return {
            ...state,
            loading: false,
            products: payload,
          };

        case DELET_PRODUCT:
          return {
            ...state,
            loading: true,
          };

        case DELET_PRODUCT_FAIL:
          return {
            ...state,
            loading: false,
            errors: payload,
          };

          
        case DELET_PRODUCT_SUCCESS:
          return {
            ...state,
            loading: false,
            products: state.products.filter((product) => product._id !== payload),
          };
    
        default:
          return state;
      }
 
};
export default productReducer;
