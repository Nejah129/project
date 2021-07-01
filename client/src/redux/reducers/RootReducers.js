import {combineReducers} from 'redux';
import productReducer from './productReducer';
import userReducer from './reducer';

export default combineReducers({productReducer,userReducer});