
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import SingnUP from './compoments/SingUP';
import Login from './compoments/Login';
import Profil from './compoments/Profile';
import NavBar from './compoments/NavBar/NavBar';
import HomeScreen from './compoments/HomeScreen/HomeScreen';
import ProductsDiscription from './compoments/HomeScreen/ProductsDiscription';
function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path ="/singUp" component={SingnUP}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profil" component={Profil}/>
          <Route exact path="/product/:id" component={ProductsDiscription}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
