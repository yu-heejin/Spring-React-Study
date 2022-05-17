import React, { Component } from 'react';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Main from './MainComponent';
import Project from './ProjectComponent';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return(
    <Router>
        <Route path="/" exact={true} component={withRouter(Login)}></Route>
        <Route path="/signup" component={withRouter(Register)}></Route>
        <Route path="/main" component={withRouter(Main)}></Route>
        <Route path="/project" component={withRouter(Project)}></Route>
    </Router>
    )
  }
}

export default App;