import React, { Component } from 'react';
import Login from './page/Login';
import Register from './page/Register';
import Main from './page/Main';
import Project from './page/Project';
import AddModal from './component/Modal/AddProjecModal';
import Members from './component/ListView/SearchList'
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return(
    <Router>
        <Route path="/" exact={true} component={withRouter(Login)}></Route>
        <Route path="/signup" component={withRouter(Register)}></Route>
        <Route path="/main" component={withRouter(Main)}></Route>
        <Route path="/project" component={withRouter(Project)}></Route>
        <Route path="/modal" component={withRouter(AddModal)}></Route>
        <Route path="/list" component={withRouter(Members)}></Route>
        
    </Router>
    )
  }
}

export default App;