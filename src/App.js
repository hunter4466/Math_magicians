import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/calculator';
import HomePage from './components/home';
import QuotePage from './components/quote';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="switch">
          <div className="switch_header">
            <h1 className="page_title">Math Magicians</h1>
            <ul className="nav-bar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/quote">
              <QuotePage />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}
