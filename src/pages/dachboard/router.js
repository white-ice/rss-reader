import React from 'react';
import { Route } from 'react-router';
import Dashboard from './Dashboard';

export default (

    <Route>
        <Route component={ Dashboard } path={ Dashboard.path } />
    </Route>
);