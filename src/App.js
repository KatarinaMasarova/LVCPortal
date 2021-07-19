import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/Home';
import Registration from './components/Registration';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/gallery" component={Gallery}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
