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
      currentProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
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

  editProduct(product) {
    this.setState({
      currentProduct: product
    })
  }

  render() {
    const { inventory } = this.state

    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={inventory}
          getInventory={this.getInventory}
          editProduct={this.editProduct}
        />
        <Form
          product={this.state.currentProduct}
          getInventory={this.getInventory}
          editProduct={this.editProduct}
        />
      </div>
    )
  }
}
