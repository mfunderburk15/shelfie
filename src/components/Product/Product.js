import React, { Component } from 'react'

export default class Product extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        const { name, price, imgurl } = this.props.data
        return (
            <div>
                <img src={imgurl} />
                <p>{name}</p>
                <p>${price}</p>
            </div>
        )
    }
}