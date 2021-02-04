import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from '../src/components/Appbar/Appbar';
import About from '../src/pages/About/About';
import People from '../src/pages/People/People';
import Properties from '../src/pages/Properties/Properties';
import Contact from '../src/pages/Contact/Contact';
import Home from '../src/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/properties">
            <Properties/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/people">
            <People/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
