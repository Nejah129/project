import axios from "axios";
import { type } from "os";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADJUST_QUENTITY,
  ADJUST_QUENTITY_FAIL,
  ADJUST_QUENTITY_SUCCESS,
  DELET_PRODUCT,
  DELET_PRODUCT_FAIL,
  DELET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_WITH_ID,
  GET_PRODUCT_WITH_ID_FAIL,
  GET_PRODUCT_WITH_ID_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOAD_CART_ITEM,
  LOAD_CURRENT_ITEM_FAIL,
  LOAD_CURRENT_ITEM_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  PRODUCT,
  PROFIL,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAIL,
  REMOVE_FROM_CART_SUCCESS,
} from "../actionsType/actionsType";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });

  try {
    const RegisterResult = await axios.post("/user/register", newUser);
    console.log(RegisterResult.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: RegisterResult.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.reponce.data,
    });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const loginRes = await axios.post("user/login", user);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
export const getProfil = () => async (dispatch) => {
  dispatch({
    type: PROFIL,
  });
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const isAuth = await axios.get("/user/auth", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProduct = () => async (dispatch) => {
  dispatch({
    type: PRODUCT,
  });
  try {
    const { data } = await axios.get("/product/get_product");
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProductWithID = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_WITH_ID,
  });
  try {
    const { data } = await axios.get(`/product/get_product/${id}`);
    dispatch({
      type: GET_PRODUCT_WITH_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_WITH_ID_FAIL,
      payload: error.response.data,
    });
  }
};

export const addNewProduct =
  (name, description, category, price, quantity) => async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
    });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const newProduct = {
        name,
        description,
        category,
        price,
        quantity,
      };
      const addNewproductResult = await axios.post(
        "product/add_product",
        newProduct,config
      );
      //console.log(addNewproductResult.data)
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: addNewproductResult.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };
export const deletProduct = (id) => async (dispatch) => {
  dispatch({
    type: DELET_PRODUCT,
  });
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let { data } = await axios.delete(`/product/delet_product/${id}`,config);
    dispatch({
      type: DELET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELET_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const addToCart = (id) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
  });
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  let {data}=await axios.post(`/add_cart/${id}`,config)
  try {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error.reponce.data,
    });
  }
};
// we start to fix from here
export const removeFromCart = (userId,itemId) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
  });
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  let {data}=await axios.delete(`/delete_cart/${userId}/${itemId}`,config)
  try {
    dispatch({
      type: REMOVE_FROM_CART_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_CART_FAIL,
      payload: error.response.data,
    });
  }
};
export const adjustQuntity = (id, value) => async (dispatch) => {
  dispatch({
    type: ADJUST_QUENTITY,
  });
  
  try {
    dispatch({
      type:ADJUST_QUENTITY_SUCCESS,payload:{id,quantity:value}
    })
  } catch (error) {
    dispatch({
      type: ADJUST_QUENTITY_FAIL,
      payload: error.response.data,
    });
  }
};
export const loadCurrentItem=(Product)=>async(dispatch)=>{
dispatch({
  type:LOAD_CART_ITEM
})
try {
  dispatch({
    type:LOAD_CURRENT_ITEM_SUCCESS,
    payload:Product
  })
} catch (error) {
  dispatch({
    type: LOAD_CURRENT_ITEM_FAIL,
    payload: error.response.data,
  });
}
}