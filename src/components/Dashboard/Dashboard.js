import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }



    render() {
        const { inventory } = this.props
        return (
            <div>
                {inventory.map(element => {
                    return <Product
                        key={element.id}
                        data={element}
                    />
                })}
            </div>
        )
    }
}