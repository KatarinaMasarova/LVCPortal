import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Help from './components/Help';
import Contact from './components/Contact';
import FooterTop from './components/FooterTop';
import SearchBar from './components/SearchBar';
import CourseMern from './components/CourseMern';
import CourseMean from './components/CourseMean';
import CourseMevn from './components/CourseMevn';
import CourseNode from './components/CourseNode';
import CourseExpress from './components/CourseExpress';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <div className="row">
          <div className="col-12 col-md-9 col-lg-10">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/registration" component={Registration}></Route>
              <Route path="/gallery" component={Gallery}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/help" component={Help}></Route>
              <Route path="/contact" component={Contact}></Route>
              
              <Route path="/courses/mern" component={CourseMern}></Route>
              <Route path="/courses/mean" component={CourseMean}></Route>
              <Route path="/courses/mevn" component={CourseMevn}></Route>
              <Route path="/courses/nodejs" component={CourseNode}></Route>
              <Route path="/courses/expressjs" component={CourseExpress}></Route>

            </Switch>
          </div>
          <div className="col-12 col-md-3 col-lg-2">
            <SearchBar></SearchBar>
          </div>
        </div>
        <FooterTop></FooterTop>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
