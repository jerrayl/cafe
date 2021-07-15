import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./Pages/Admin";
import Customer from "./Pages/Customer";

import React from 'react';

function App() {
  // Router allows each different path to serve a different page. 
  // In this case, cafeapp.com/customer will show the customer screen for making orders
  // cafeapp.com/admin will show the admin screen showing all orders
  // cafeapp.com will show a menu allowing users to select which page they want to go to

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
          <Link to="/customer">Customer</Link>
          <Link to="/admin">Admin</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
