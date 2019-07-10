import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './components/pages/Dashboard';
import LoginPage from './components/pages/login';
import AboutPage from './components/pages/About'
import menu from './mock/menu'
import Auth from './auth';

import configureStore from './store';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <Header menus={menu} logo={'MYLogo'}/>
                    <Switch>
                        <Route path="/dashboard" exact component={Auth(Dashboard,true)}/>
                        <Route path="/login" exact component={LoginPage}/>
                        <Route path="/about" exact component={AboutPage}/>
                    </Switch>
            </Fragment>
        </Provider>
    );
}

export default App;
