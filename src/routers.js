import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';

import Dashboard from 'pages/dachboard/Dashboard';
import DashboardRouter from 'pages/dachboard/router';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ Dashboard }/>

        { DashboardRouter }

        {/*<Route path="*" component={ ErrorPage }/>*/}
    </Route>
);
