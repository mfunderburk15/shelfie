import React from 'react'
import { withRouter } from 'react-router-dom'

function Product(props) {
    let { id, name, price, imgurl } = props.data;
    return (
        <div className='product'>
            <img className='product-img' src={imgurl} />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>${price}</p>
            </div>
            <div className='product-control'>
                <button className='product-button' onClick={() => props.deleteProduct(id)}>Delete</button>
                <button className='product-button' onClick={() => props.history.push(`/edit/${props.data.id}`)}>Edit</button>
            </div>
        </div>
    )
}

export default withRouter(Product)