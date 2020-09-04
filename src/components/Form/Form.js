import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onCancel() {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
        })
    }

    render() {
        const { name, price, imgurl } = this.state

        return (
            <div>
                <input
                    value={imgurl}
                    name='imgurl'
                    onChange={this.handleChange}
                />
                <input
                    value={name}
                    name='name'
                    onChange={this.handleChange}
                />
                <input
                    value={price}
                    name='price'
                    onChange={this.handleChange}
                />
                <button onClick={this.onCancel}>Cancel</button>
                <button>Add To Inventory</button>
            </div>
        )
    }
}