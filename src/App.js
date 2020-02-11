import React from 'react';
import logo from './comgecey-05.jpg';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home/Home';
import InscriptionForm from './pages/register/InscriptionForm';
import Apply from './apps/register/Apply';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/datos' component={InscriptionForm} />
        <Route exact path='/registro' component={Apply} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
