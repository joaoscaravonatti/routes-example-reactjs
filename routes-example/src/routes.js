import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Repository from './pages/repository';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/repository/:user/:name' component={Repository} />
        </Switch>
    </BrowserRouter>
);

export default Routes;