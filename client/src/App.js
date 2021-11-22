
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import SingnUP from './compoments/SingUP';
import Login from './compoments/Login';
import Profil from './compoments/Profile';
import NavBar from './compoments/NavBar/NavBar';
import ShopingCart from './compoments/HomeScreen/ShopingCart'

import ProductsDiscription from './compoments/HomeScreen/ProductsDiscription';
import ProductList from './compoments/HomeScreen/ProductsList';
function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path ="/singUp" component={SingnUP}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profil" component={Profil}/>
          <Route exact path="/product/:id" component={ProductsDiscription}/>
          <Route exact path="/cart/:userId/:itemId" component={ShopingCart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
