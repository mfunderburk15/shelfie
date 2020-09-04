import React, { Component } from 'react';
import Axios from 'axios'
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
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    Axios.get('/api/inventory').then((response) => {
      this.setState({
        inventory: response.data
      })
    })
  }

  render() {
    const { inventory } = this.state

    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={inventory}
        />
        <Form
          getInventory={this.getInventory}
        />
      </div>
    )
  }
}
