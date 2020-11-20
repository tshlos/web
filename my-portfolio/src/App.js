import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Social from "./components/Social";
import ContactPage from "./components/ContactPage";

class App extends Component {
  
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <Social />
        </Router>
      </>
    );
  }
}

export default App;
