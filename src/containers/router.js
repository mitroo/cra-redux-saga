import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import MainScreen from './MainScreen';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/change-password" component={ChangePassword} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
    </BrowserRouter>
);

export default Router;
