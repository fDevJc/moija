import React from 'react';
import Home from './routes/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './routes/Profile';
import Login from './routes/Login';
import Join from './routes/Join';
import ProfileEdit from './routes/ProfileEdit';
import GameDetail from './routes/GameDetail';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profileEdit">
          <ProfileEdit />
        </Route>
        <Route path="/auth/join">
          <Join />
        </Route>
        <Route path="/game/detail">
          <GameDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
