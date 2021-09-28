import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Game from "./pages/Game";
import Board from './pages/Board';



function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/game/:deck">
                <Game/>
            </Route>
            <Route exact path="/board">
                <Board/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
