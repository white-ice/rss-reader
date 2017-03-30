import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';

import Dashboard from 'pages/dachboard/Dashboard';
import DashboardRouter from 'pages/dachboard/router';
import ErrorPage from 'pages/error/Error';

export default (
    <Route path="/" component={ App } >
        <IndexRoute component={ Dashboard }/>

        { DashboardRouter }

        <Route path="*" component={ ErrorPage }/>
    </Route>
);
