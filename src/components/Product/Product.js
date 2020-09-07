import React, { Component } from 'react'

export default class Product extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        const { id, name, price, imgurl } = this.props.data
        return (
            <div>
                <img src={imgurl} />
                <div>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
                <div>
                    <button onClick={() => this.props.deleteProduct(id)}>Delete</button>
                    <button onClick={() => this.props.editProduct(this.props.data)}>Edit</button>
                </div>
            </div>
        )
    }
}