
import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import App from '../App'
import Home from '../pages/home'
import Login from '../pages/login'

export default class extends Component {
    render () {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" component={Home} />
                    </Switch>
                </App>
            </Router>
        )
    }
}