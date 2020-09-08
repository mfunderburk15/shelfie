import React, { Component } from 'react'
import Axios from 'axios';
import { withRouter } from 'react-router-dom'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            edit: false
        }
    }

    componentDidMount() {
        console.log(this.props.match)
        let { id } = this.props.match.params
        if (id) {
            Axios.get(`/api/product/${id}`)
                .then(response => {
                    this.setState({
                        ...response.data[0], edit: true
                    })
                    console.log(response.data)
                })
        }
    }

    componentDidUpdate(oldProps) {
        console.log(this.props)
        if (this.props.match.path !== oldProps.match.path) {
            this.setState({
                name: '',
                price: 0,
                img: ''
            })
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
            .then(response => {
                this.props.history.push('/')
            })
            .catch(error => console.log('There was an error creating this product', error))
    }

    onCancel() {
        if (this.props.match.params.id) {
            this.props.history.push('/')
        } else {
            this.setState({
                name: '',
                price: 0,
                imgurl: '',
                edit: false
            })
        }
    }

    handleEdit() {
        let { id, name, price, imgurl } = this.state;
        let product = {
            name,
            price,
            imgurl
        }
        Axios.put(`/api/product/${id}`, product)
            .then(response => {
                this.props.history.push('/')
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div className='form'>
                <img className='image-preview' src={this.state.imgurl} />
                <div className='form-info'>
                    <p>Image URL:</p>
                    <input type='text' value={this.state.imgurl} onChange={e => this.handleImage(e.target.value)} />
                    <p>Product Name:</p>
                    <input type='text' value={this.state.name} onChange={e => this.nameInput(e.target.value)} />
                    <p>Price:</p>
                    <input type='text' pattern="[0-9]*" value={this.state.price} onChange={e => this.handlePrice(e.target.value)} />
                </div>
                <div className='form-buttons'>
                    <button className='form-button' onClick={() => this.onCancel()}>Cancel</button>
                    {this.state.edit
                        ? <button className='form-button' onClick={() => this.handleEdit()}>Save Changes</button>
                        : <button className='form-button' onClick={() => this.handleSubmit()}>Add to Inventory</button>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Form)