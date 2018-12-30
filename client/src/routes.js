import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Result from './components/result/result';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component = { Home } />
                <Route path="/result"  component = { Result } />
            </Switch>
        </div>
    );
}

export default Routes;