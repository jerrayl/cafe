import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import { BackendProvider } from './utils/backend';

function App() {
  // Router allows each different path to serve a different page. 
  // In this case, cafeapp.com/customer will show the customer screen for making orders
  // cafeapp.com/admin will show the admin screen showing all orders
  // cafeapp.com will show a menu allowing users to select which page they want to go to

  // BackendProvider pertains to context, which is used here to appoximate a production backend
  return (
    <div className="App">
      <BackendProvider>
      <Router>
          <Switch>
            <Route path="/customer">
              <Customer />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Link to="/customer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Customer</Link>
              <Link to="/admin">Admin</Link>
            </Route>
          </Switch>
      </Router>
      </BackendProvider>
    </div>
  );
}

export default App;
