import React from 'react';
import logo from './comgecey-05.jpg';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import InscriptionForm from './pages/register/InscriptionForm';
import Apply from './apps/register/Apply';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/datos/:idRegister' component={InscriptionForm} />
        <Route exact path='/' component={Apply} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
