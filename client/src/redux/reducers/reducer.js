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

const init = {
  loading: false,
  users: null,
  errors: null,
};
const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case PROFIL:
      return {
        ...state,
        loading: true,
      };
      case GET_PROFILE_FAIL:
          return{
              ...state,loading:false,errors:payload
          }
          case GET_PROFILE_SUCCESS:
              return{
                  ...state,loading:false,users:payload,isAuth:payload
              }

    default:
      return state;
  }
};
export default userReducer;
