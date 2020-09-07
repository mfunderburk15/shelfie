import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/add' component={Form} />
          <Route path='/edit/:id' component={Form} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)