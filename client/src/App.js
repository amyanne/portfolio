import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './containers/Project';
import Contact from './components/Contact';
import ProjectShow from "./containers/ProjectShow";
import Nav from './components/Nav';

import './App.css';

class App extends Component {



  render() {
  return (
    <Router>
      <Nav />
      <div className="container" align="center">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/projects" component={ Project } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/projects/:id" component={ ProjectShow } />
         
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
