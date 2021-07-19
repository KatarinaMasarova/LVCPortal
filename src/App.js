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
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Help from './components/Help';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/help" component={Help}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
