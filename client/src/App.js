import React from 'react';
import Home from './routes/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './routes/Profile';
import Login from './routes/Login';
import ProfileEdit from './routes/ProfileEdit';

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
        <Route path="/ProfileEdit">
          <ProfileEdit />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
