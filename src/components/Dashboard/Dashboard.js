import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                This is Dashboard.js
                <Product />
            </div>
        )
    }
}