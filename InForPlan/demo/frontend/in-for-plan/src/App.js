import React, { Component } from 'react';
import Login from './loginComponent';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
        <Router>
            <Route path="/" component={Login} />
        </Router>
    )
  }
}

export default App;