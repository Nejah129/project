import { ADD_TO_CART, ADD_TO_CART_FAIL, ADD_TO_CART_SUCCESS, ADJUST_QUENTITY, ADJUST_QUENTITY_FAIL, ADJUST_QUENTITY_SUCCESS, LOAD_CART_ITEM, LOAD_CURRENT_ITEM_FAIL, LOAD_CURRENT_ITEM_SUCCESS, REMOVE_FROM_CART, REMOVE_FROM_CART_FAIL, REMOVE_FROM_CART_SUCCESS } from "../actionsType/actionsType";

const init = {
  loading: false,
  cart: [],
  errors: null,
};
const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error:payload
        
      };
      case ADD_TO_CART_SUCCESS:
        return {
            ...state,
            loading: false,
            cart: [...state.cart, payload]
          };  
          case REMOVE_FROM_CART:
            return {
                ...state,
                loading: true,
              };
              case REMOVE_FROM_CART_FAIL:
      return {
        ...state,
        loading: false,
        error:payload
        
      };
      case REMOVE_FROM_CART_SUCCESS:
        return {
            ...state,
            loading: false,
            cart: [...state.cart, payload]
          }; 
          case ADJUST_QUENTITY:
            return {
                ...state,
                loading: true,
              };
              case ADJUST_QUENTITY_FAIL:
      return {
        ...state,
        loading: false,
        error:payload
        
      };
      case ADJUST_QUENTITY_SUCCESS:
        return {
            ...state,
            loading: false,
            cart: [...state.cart, payload]
          }; 
          case LOAD_CART_ITEM:
            return {
                ...state,
                loading: true,
              };
              case LOAD_CURRENT_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error:payload
        
      };
      case LOAD_CURRENT_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            cart: [...state.cart, payload]
          };    


    default:
      return state;
  }
};

export default cartReducer;
