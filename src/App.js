import React, { Component } from 'react';
import PostUser from '../src/components/PostUser/PostUser';
import AllUser  from '../src/components/AllUser/AllUser';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditComponent from './EditComponent';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Create User</Link>
          </li>
          <li>
            <Link to="/all-user">All User</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={PostUser} />
        <Route path="/all-user" component={AllUser} />
        <Route path="/edit-user/:id" component={EditComponent} />
      </div>
    </Router>
    );
  }
}

export default App;
