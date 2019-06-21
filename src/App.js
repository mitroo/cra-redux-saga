import React, { Component } from 'react';
import Router from './components/Routes/router';
import { Provider } from 'react-redux';
import createStore from './stores';

const store = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router />
                </div>
            </Provider>
        );
    }
}
