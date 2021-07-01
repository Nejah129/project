import{createStore,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import combineReducers from "./reducers/RootReducers"

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store=createStore(combineReducers,compose(applyMiddleware(thunk),devtools));
export default store;