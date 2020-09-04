import React, { Component } from 'react'

export default class Product extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const { name, price, img } = this.props.data
        return (
            <div>
                <img src={img} />
                <p>{name}</p>
                <p>{price}</p>
            </div>
        )
    }
}