import React, { Component } from 'react';
import Axios from 'axios';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    componentDidUpdate(oldProps) {
        console.log(this.props)
        let { id, name, price, imgurl } = this.props.product
        if (oldProps.product.id !== this.props.product.id) {
            this.setState({ id, name, price, imgurl, edit: true })
        }
    }

    handleImage(imgurl) {
        this.setState({ imgurl: imgurl })
    }

    nameInput(name) {
        this.setState({ name: name })
    }

    handlePrice(price) {
        this.setState({ price: price })
    }

    handleSubmit() {
        let { name, price, imgurl } = this.state;
        let product = { name, price, imgurl }
        Axios.post('/api/product', product)
            .then(res => {
                this.props.getInventory()
                this.onCancel()
            })
            .catch(err => console.log('There was an error creating this product', err))
    }

    onCancel() {
        if (this.state.id) {
            this.props.editProduct({})
        }
        this.setState({
            id: null,
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    handleEdit() {
        let { id, name, price, imgurl } = this.state;
        if (name) {
            let product = {
                name,
                price,
                imgurl
            }
            Axios.put(`/api/product/${id}`, product)
                .then(response => {
                    this.props.getInventory();
                    this.onCancel();
                })
                .catch(error => console.log(error))
        }
    }


    render() {
        return (
            <div className='Form'>
                <img src={this.state.imgurl} />
                <p>Image URL:</p>
                <input type='text' value={this.state.imgurl} onChange={e => this.handleImage(e.target.value)} />
                <p>Product Name:</p>
                <input type='text' value={this.state.name} onChange={e => this.nameInput(e.target.value)} />
                <p>Price:</p>
                <input type='text' pattern="[0-9]*" value={this.state.price} onChange={e => this.handlePrice(e.target.value)} />
                <div className='form_button_box'>
                    <button onClick={() => this.onCancel()}>Cancel</button>
                    {this.state.id
                        ? <button onClick={_ => this.handleEdit()}>Save Changes</button>
                        : <button onClick={_ => this.handleSubmit()}>Add to Inventory</button>
                    }
                </div>
            </div>
        );
    }
}