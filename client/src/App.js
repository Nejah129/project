
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import SingnUP from './compoments/SingUP';
import Login from './compoments/Login';
import Profil from './compoments/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component={SingnUP}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profil" component={Profil}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
