import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
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
        let product = {
            name, price, imgurl,
        }
        axios.post('/api/product', product)
            .then(res => {
                this.props.getInventory();
                this.onCancel();
            })
            .catch(err => console.log('There was an error creating this product', err))
    }

    onCancel() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
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
                    <button onClick={() => this.handleSubmit()}>Add to Inventory</button>
                </div>
            </div>
        );
    }
}

export default Form;