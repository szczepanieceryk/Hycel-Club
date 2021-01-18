import React from 'react';

import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
const Page = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={LoginPage} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </>
    );
}

export default Page;