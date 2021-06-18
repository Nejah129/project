import axios from "axios";
import {
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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
