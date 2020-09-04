import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
    }
  }

  render() {
    const { inventory } = this.state

    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={inventory}
          name={inventory.name}
          price={inventory.price}
          img={inventory.img}
        />
        <Form />
      </div>
    )
  }
}
