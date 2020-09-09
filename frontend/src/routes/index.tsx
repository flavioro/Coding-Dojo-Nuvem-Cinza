import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Mapa from '../layouts/Mapa';
import Formulario from '../layouts/Formulario';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Formulario} />
    <Route path="/mapa" component={Mapa} />
  </Switch>
);

export default Routes;
