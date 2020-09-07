import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import { withRouter } from 'react-router-dom'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
        this.getInventory = this.getInventory.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    componentDidMount() {
        this.getInventory();
    }
    getInventory() {
        axios.get('/api/inventory')
            .then(response => this.setState({ inventory: response.data }))
    }
    deleteProduct(id) {
        axios.delete(`/api/product/${id}`)
            .then(response => this.getInventory())
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className='dashboard'>
                {this.state.inventory.map((element) => {
                    return <Product key={element.id} data={element} deleteProduct={this.deleteProduct} />
                })}
            </div>
        );
    }
}

export default withRouter(Dashboard)