import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Game from "../src/pages/Game";



function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/">
                <Game/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
