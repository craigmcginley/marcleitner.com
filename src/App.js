import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import MovieGuide from './components/movie-guide';
import Music from './components/music';
import Television from './components/television';
import Film from './components/film';
import Drawings from './components/drawings';

function App() {
  return (
    <Router>
      <div className="App mt-24 px-6 py-2">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie-guide">
            <MovieGuide />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/television">
            <Television />
          </Route>
          <Route path="/film">
            <Film />
          </Route>
          <Route path="/drawings">
            <Drawings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
