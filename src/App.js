import React from 'react';
import { Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home/Home';
import InscriptionForm from './apps/register/InscriptionForm';
import Apply from './apps/register/Apply';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/user/:userId' component={InscriptionForm} />
        <Route exact path='/registro' component={Apply} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
