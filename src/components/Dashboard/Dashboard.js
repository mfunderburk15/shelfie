import React, { Component } from 'react'
import Axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
        Axios.delete(`/api/product/${id}`)
            .then(response => this.props.getInventory())
            .catch(error => console.log('There was an error deleting this product'))
    }

    render() {
        const { inventory } = this.props
        return (
            <div>
                {inventory.map(element => {
                    return <Product
                        key={element.id}
                        data={element}
                        deleteProduct={this.deleteProduct}
                        editProduct={this.props.editProduct}
                    />
                })}
            </div>
        )
    }
}