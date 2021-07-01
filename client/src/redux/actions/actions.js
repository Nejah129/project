import axios from "axios";
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
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  PRODUCT,
  PROFIL,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
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
export const getProfil=()=>async(dispatch)=>{

  dispatch({
    type:PROFIL
  })
  const token=localStorage.getItem('token')
  const config ={
    headers:{
      Authorization:token
    }
  }
  try {
    const isAuth=await axios.get("/user/auth",config)
    dispatch({
      type:GET_PROFILE_SUCCESS,
      payload:isAuth.data
    })
  } catch (error) {
    dispatch({
      type:GET_PROFILE_FAIL,
      payload:error.response.data
    })
  }


}

export const getProduct=()=>async(dispatch)=>{
  dispatch({
    type:PRODUCT
  })
  try {
    const {data}=await  axios.get('/product/get_product')
    dispatch({
      type:GET_PRODUCT_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:GET_PRODUCT_FAIL,
      payload:error.response.data})
   

  }
}

export const getProductWithID=()=>async(dispatch)=>{
  dispatch({
    type:GET_PRODUCT_WITH_ID
  })
  try {
    const {data}=await  axios.get('/product/get_product/:id')
    dispatch({
      type:GET_PRODUCT_WITH_ID_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:GET_PRODUCT_WITH_ID_FAIL,
      payload:error.response.data})
   

  }
}





export  const addNewProduct=(name,description,category,price,quantity)=>async(dispatch)=>{
  
dispatch({
  type:ADD_PRODUCT
})

try {
  const newProduct ={
    name,
      description,
      category,
      price,
      quantity
    };
  const addNewproductResult=await axios.post('product/add_product',newProduct)
  //console.log(addNewproductResult.data)
  dispatch({
    type:ADD_PRODUCT_SUCCESS,
    payload:addNewproductResult.data
  })
} 
catch (error) {
  dispatch({
    type:ADD_PRODUCT_FAIL,
    payload:error.response.data
  })
}
}
export const deletProduct=(id)=>async(dispatch)=>{

  dispatch({
    type:DELET_PRODUCT
  })
  try {
    let {data}=await axios.delete(`/product/delet_product/${id}`)
    dispatch({
      type:DELET_PRODUCT_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:DELET_PRODUCT_FAIL,payload:error.response.data
    })
  }
}
