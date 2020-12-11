import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Social from "./components/Social";
import ContactPage from "./components/ContactPage";
import Nav from "./components/Nav";
import Home from "./components/Home";


class App extends Component {

  render(){
    return (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/say_hello" component={ContactPage} />
          </Switch>
          <Social />
        </BrowserRouter>
    );
  }
}
export default App;

