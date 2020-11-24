import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './containers/Project';
import Resume from './containers/Resume';
import Contact from './components/Contact';
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
          <Route exact path="/resume" component={ Resume } />
          <Route exact path="/contact" component={ Contact } />
         
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
