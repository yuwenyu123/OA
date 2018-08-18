import React, { Component } from 'react';

import AppHome from './components/pages/home'

import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <NavLink exact to={'/'}  >首页</NavLink>
        &nbsp;&nbsp;&nbsp;
          <NavLink to={'/more'}  >更多</NavLink>
        <hr /> */}
        <Route exact path="/" component={AppHome} />
      </div>
    );
  }
}

export default App;
