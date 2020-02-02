import React from 'react';
import logo from './comgecey-05.jpg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import InscriptionForm from './pages/register/InscriptionForm';
import Apply from './apps/register/Apply';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/registro/:idRegister' component={InscriptionForm} />
        <Route path='/registro' component={Apply} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
