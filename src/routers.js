import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';

import {dashboard, dashboardRouter} from 'pages/dachboard/index';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ dashboard }/>

        {dashboardRouter}

        {/*<Route path="*" component={ ErrorPage }/>*/}
    </Route>
);